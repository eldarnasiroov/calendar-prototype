export interface ITreeNode {
  id: number;
  label: string;
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
