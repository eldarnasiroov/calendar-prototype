export interface ITreeNode {
  id: number;
  label: string;
  children?: ITreeNode[];
}

export interface ITreeProps {
  nodes: ITreeNode[];
  size?: "small" | "medium";
}

export interface ITreeNodeProps {
  node: ITreeNode;
  depth: number;
  scroll: () => void;
  open: boolean;
  size?: "small" | "medium";
}
