// parentId: null,
//     name: "Корневая бригада",
//     type: "brigade",
//     ordersQuantity: 6,
//     ordersTotalSum: 50000,
//     workload: 45,
//     brigadier: {
//       id: 1,
//       name: "Саша",
//       surname: "Белый",
//       patronymic: "Иванович",
//       position: "Директор",
//     }

// export interface ITreeNode {
//   id: number;
//   label: string;
//   children?: ITreeNode[];
// }
export interface ITreeNode {
  id: number;
  parentId: number | null;
  type: "brigade" | "workplace";
  name: string;
  ordersQuantity?: number;
  ordersTotalSum?: number;
  workload?: number;
  brigadier?: {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    position: string;
  };
  worker?: {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    position: string;
  };
  children?: ITreeNode[];
}

export interface ITreeProps {
  nodes: ITreeNode[];
  size?: "small" | "medium";
  selectable?: boolean;
  selectedNodes?: any[];
  onSelect?: (node: ITreeNode, nodeDepth: number) => void;
}

export interface ITreeNodeProps {
  node: ITreeNode;
  depth: number;
  scroll: () => void;
  open: boolean;
  size?: "small" | "medium";
  selectable?: boolean;
  selectedNodes?: any[];
  onSelect?: (node: ITreeNode, nodeDepth: number) => void;
}
