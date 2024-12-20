import { ENTITY_TYPES, SMALL_HEIGHT } from "../../common/constants";
import { reduce, find } from "lodash";
import { Folder } from "../../common/folder";
import { ITreeNode } from "../../common/types";
import { useMemo } from "react";
import {
  getBrigadierFromNode,
  getCountOfWorkplaces,
} from "../../../../common/helpers";

interface Props {
  node: ITreeNode;
  size?: "small" | "medium";
}

export const NodeIcon: React.FC<Props> = ({ node, size = "medium" }) => {
  const brigadier = useMemo(() => {
    return getBrigadierFromNode(node);
  }, [node]);

  const workplacesCount = useMemo(() => {
    return getCountOfWorkplaces(node);
  }, [node]);

  return (
    <div
      className="tree-node__icon-wrapper"
      style={
        size === "small" ? { width: "60px", height: SMALL_HEIGHT + "px" } : null
      }
    >
      {node.type === "brigade" && (
        <>
          <div
            className="tree-node__icon"
            style={
              size === "small"
                ? { width: "60px", height: SMALL_HEIGHT + "px" }
                : null
            }
          >
            <Folder />
          </div>
          <p
            className="tree-node__count"
            style={{ top: size === "small" ? "3px" : "" }}
          >
            {workplacesCount}
          </p>
          <p
            className="tree-node__type"
            style={{
              right: size === "small" ? "0" : null,
              top: size === "small" ? "3px" : null,
              fontSize: size === "small" ? "8px" : "",
            }}
          >
            {ENTITY_TYPES[node.type]}
          </p>
          <img
            className="tree-node__image"
            width={size === "small" ? 35 : 65}
            height={size === "small" ? 35 : 65}
            src={brigadier?.worker?.image}
            alt=""
            style={{ top: "12px" }}
          />
        </>
      )}

      {node.type === "workplace" && (
        <img
          width={size === "small" ? 35 : 65}
          height={size === "small" ? 35 : 65}
          src={node?.worker?.image}
          alt=""
          style={{
            borderRadius: "50%",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      )}
    </div>
  );
};
