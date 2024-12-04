import { reduce, find } from "lodash";
import { ITreeNode } from "./types";

export const getCountOfWorkplaces = (obj) => {
  return reduce(
    obj.children,
    (count, child) => {
      let currentCount = child.type === "workplace" ? 1 : 0;

      if (child.children && child.children.length) {
        currentCount += getCountOfWorkplaces(child);
      }

      return count + currentCount;
    },
    0
  );
};

export const getBrigadierFromNode = (node: ITreeNode) =>
  find(node.children, (item: ITreeNode) => item?.worker?.isBrigadier);
