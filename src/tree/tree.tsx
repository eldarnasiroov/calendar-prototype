import React, { useRef, useState } from "react";
import { some, forEach } from "lodash";

import { ITreeNode, ITreeProps } from "./common/types";

import "./tree.scss";
import { TreeNode } from "./partials/treeNode";

interface SelectedNode {
  node: ITreeNode;
  depth: number;
}

export const Tree: React.FC<ITreeProps> = ({
  nodes,
  size = "medium",
  selectable,
  onSelect,
  selectedNodes,
}) => {
  const ref = useRef<any>(null);
  const [selected, setSelected] = useState<SelectedNode[]>([]);

  const logFirstChildren = (node: any, depth, exists) => {
    if (node.children && node.children.length > 0) {
      if (exists) {
        setSelected((prev) => prev.filter((item) => item.node.id !== node.id));
        forEach(node.children, (item) =>
          logFirstChildren(item, depth + 1, exists)
        );
        return;
      }
      const nodeExists = some(selected, { node, depth });
      !nodeExists && setSelected((prev) => [...prev, { node, depth }]);
      forEach(node.children, (item) =>
        logFirstChildren(item, depth + 1, exists)
      );
      return;
    }

    if (exists) {
      setSelected((prev) => prev.filter((item) => item.node.id !== node.id));
      forEach(node.children, (item) =>
        logFirstChildren(item, depth + 1, exists)
      );
      return;
    }
    const nodeExists = some(selected, { node, depth });
    !nodeExists && setSelected((prev) => [...prev, { node, depth }]);
  };

  const handleSelect = (node: ITreeNode, nodeDepth: number) => {
    const exists = some(selected, { node, depth: nodeDepth });
    logFirstChildren(node, nodeDepth, exists);
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
            selectedNodes={selected}
          />
        ))}
      </div>
    </div>
  );
};
