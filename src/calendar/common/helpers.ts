import { reduce, find, flatMap, some } from "lodash";
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

export function findObjectWithMatchingParentId(data, parentId) {
  if (
    data.id === parentId &&
    some(data.children, (child) => child.parentId === parentId)
  ) {
    return data;
  }

  return (
    find(data.children, (child) =>
      findObjectWithMatchingParentId(child, parentId)
    ) || null
  );
}

export const findWorkplaces = (data) => {
  const search = (nodes) => {
    return flatMap(nodes, (node) => {
      const workplaces = node.type === "workplace" ? [node] : [];
      if (node.children) {
        return workplaces.concat(search(node.children));
      }
      return workplaces;
    });
  };

  return search(data);
};

export const filterWorkplacesByOrderId = (data, orderId) => {
  return data.filter((item) =>
    item.worker?.orders?.some((order) => order.id === orderId)
  );
};

export const filterOrdersInWorkplacesById = (data, targetId) => {
  return data.map((item) => {
    const filteredOrders = item.worker.orders.filter(
      (order) => order.id === targetId
    );

    return {
      ...item,
      worker: {
        ...item.worker,
        orders: filteredOrders,
      },
    };
  });
};

export const findElementByTypeAndId = (data, targetType, targetId) => {
  for (const item of data) {
    if (item.type === targetType && item.id === targetId) {
      return item;
    }

    if (item.children && item.children.length > 0) {
      const result = findElementByTypeAndId(
        item.children,
        targetType,
        targetId
      );
      if (result) {
        return result;
      }
    }
  }
  return null;
};
