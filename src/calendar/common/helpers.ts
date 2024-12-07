import { reduce, find, flatMap } from "lodash";
import { ITreeNode } from "../components/tree/common/types";

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

export const getAllOrders = (data: ITreeNode): any[] => {
  const flattenData = (nodes: ITreeNode[]): any[] => {
    return flatMap(nodes, (node) => {
      const childrenOrders = node.children ? flattenData(node.children) : [];
      const workerOrders = node.worker?.orders || [];
      return [...childrenOrders, ...workerOrders];
    });
  };

  return flattenData([data]);
};
