import React, { useRef, useState } from "react";
import { some, forEach, find } from "lodash";

import { ITreeNode, ITreeProps } from "./common/types";

import "./tree.scss";
import { TreeNode } from "./partials/treeNode";

export const Tree: React.FC<ITreeProps> = ({
  nodes,
  size = "medium",
  selectable,
  onSelect,
  selectedNodes,
  onClick = () => {},
}) => {
  const ref = useRef<any>(null);

  function deepFind(nodes, predicate) {
    const found = find(nodes, predicate);
    if (found) return found;

    for (const item of nodes) {
      if (item.children && item.children.length) {
        const result = deepFind(item.children, predicate);
        if (result) return result;
      }
    }
    return null;
  }

  const logFirstChildren = (node: any, children: any, depth, exists) => {
    // Для бригад и компаний
    if (children && children?.length > 0) {
      if (exists) {
        onSelect((prev) => prev.filter((item) => item.node.id !== node.id));
        forEach(children, (item) =>
          logFirstChildren(item, item.children, depth + 1, exists)
        );
        return;
      }
      const nodeExists = some(selectedNodes, {
        node: { ...node, children: [] },
        depth,
      });
      !nodeExists &&
        onSelect((prev) => [
          ...prev,
          { node: { ...node, children: [] }, depth },
        ]);
      forEach(children, (item) =>
        logFirstChildren(item, item.children, depth + 1, exists)
      );
      return;
    }

    // Для рабочих мест
    if (exists) {
      // Ищем бригаду, к которой относится удаляемое рабочее место
      const parentNode = deepFind(
        nodes,
        (item) => item.id === node.parentId && item.type === "brigade"
      );
      if (
        find(selectedNodes, (item) => item.node.id === parentNode.id) &&
        parentNode &&
        parentNode.children
      ) {
        const worklaces = parentNode.children.filter(
          (item) => item.type === "workplace"
        );

        const foundSelectedWorkplaces = worklaces.filter((item) =>
          selectedNodes.some((node) => node.node.id === item.id)
        );
        // Если выбрано одно рабочее место, то удаляем бригаду так как оно будет удалено из списка и бригада не может быть выбрана, если не выбрано ни одно рабочее место
        if (foundSelectedWorkplaces.length === 1) {
          onSelect((prev) =>
            prev.filter((item) => item.node.id !== parentNode.id)
          );
        }
      }

      onSelect((prev) => prev.filter((item) => item.node.id !== node.id));
      forEach(children, (item) =>
        logFirstChildren(item, item.children, depth + 1, exists)
      );
      return;
    }
    const nodeExists = some(selectedNodes, {
      node: { ...node, children: [] },
      depth,
    });
    !nodeExists &&
      onSelect((prev) => [...prev, { node: { ...node, children: [] }, depth }]);
  };

  const handleSelect = (node: ITreeNode, nodeDepth: number) => {
    const exists = some(selectedNodes, {
      node: { ...node, children: [] },
      depth: nodeDepth,
    });
    logFirstChildren(node, node.children, nodeDepth, exists);
  };

  const handleScroll = () => {
    if (!ref.current) return;

    setTimeout(() => {
      ref.current.scrollTo({
        left: ref.current.scrollWidth,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div ref={ref} className="tree-wrapper">
      <div className="tree-wrapper__nodes">
        {nodes.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            depth={1}
            scroll={handleScroll}
            open={false}
            size={size}
            selectable={selectable}
            onSelect={handleSelect}
            selectedNodes={selectedNodes}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
};
