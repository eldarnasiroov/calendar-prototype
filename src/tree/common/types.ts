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
    image?: string;
  };
  worker?: {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    position: string;
    image?: string;
    isBrigadier?: boolean;
  };
  children?: ITreeNode[];
}

export interface ITreeProps {
  nodes: ITreeNode[];
  size?: "small" | "medium";
  selectable?: boolean;
  selectedNodes?: any[];
  onSelect?: any;
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
