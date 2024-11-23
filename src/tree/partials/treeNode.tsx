import { useState } from "react";
import { ITreeNodeProps } from "../common/types";
import { some } from "lodash";
import { HEIGHT, SMALL_HEIGHT } from "../common/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import "./treeNode.scss";
import { NodeIcon } from "./blocks/nodeIcon";

export const TreeNode: React.FC<ITreeNodeProps> = ({
  node,
  depth,
  scroll,
  open,
  size,
  selectable = false,
  selectedNodes = [],
  onSelect = () => {},
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const hasChildren = node.children && node.children.length > 0;
  const isParentNode = depth === 1;
  const isNodeSelected = some(selectedNodes, { node, depth });

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
    scroll();
  };

  return (
    <div
      key={node.id}
      className={`tree-node ${isParentNode && "tree-node__parent"} ${
        (depth !== 1 && !isOpen) || (isParentNode && !isOpen)
          ? "overflow_hidden"
          : "overflow_visible"
      }`}
    >
      <div
        className="tree-node__wrapper"
        onClick={hasChildren ? toggleOpen : () => {}}
        style={{
          width: open || isParentNode ? "100%" : "0px",
          height:
            open || isParentNode
              ? (size === "small" ? SMALL_HEIGHT : HEIGHT) + "px"
              : "0px",
          padding: size === "small" ? "5px" : "10px",
          fontSize: size === "small" ? "8px" : "",
        }}
      >
        <div className="tree-node__info">
          <NodeIcon node={node} size={size} />

          <div className="tree-node__label">
            <p style={{ margin: "0px", fontWeight: "bold" }}>{node.name}</p>
            <p style={{ margin: "0px" }}>
              {node.type === "brigade"
                ? `${node?.brigadier?.position} / ${node?.brigadier?.name} ${node?.brigadier?.surname[0]}.`
                : `${node?.worker?.name} ${node?.worker?.surname[0]}.`}
            </p>
          </div>
        </div>

        {hasChildren && (
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronRight}
            size="3x"
            color="#9538EE"
          />
        )}

        {selectable && (
          <Button
            shape="circle"
            style={{
              width: size === "small" ? "30px" : "",
              height: size === "small" ? "30px" : "",
              minWidth: "30px",
              boxSizing: "border-box",
              marginLeft: "10px",
            }}
            icon={<FontAwesomeIcon icon={faCheck} />}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(node, depth);
            }}
            type={isNodeSelected ? "primary" : "default"}
          />
        )}
      </div>

      {hasChildren && (
        <div
          style={{
            width: "100%",
            transition: "all 0.3s ease",

            height: isOpen ? "auto" : 0,
            minHeight: isOpen
              ? (node.children?.length ?? 1) *
                  (size === "small" ? SMALL_HEIGHT : HEIGHT) +
                "px"
              : 0,
            opacity: isOpen ? 1 : 0,
          }}
        >
          {node.children?.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              scroll={scroll}
              open={isOpen}
              size={size}
              selectable
              onSelect={onSelect}
              selectedNodes={selectedNodes}
            />
          ))}
        </div>
      )}
    </div>
  );
};
