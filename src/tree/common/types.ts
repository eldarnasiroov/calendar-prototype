interface TOrder {
  /**
   * ID заказа
   */
  id: number;

  /**
   * Общая сумма
   */
  total_sum: number;
  /**
   * Процент с работы
   */
  percent_of_work: number;
  /**
   * Статус заказы
   */
  order_status: string;
  /**
   * Дата сдачи заказа
   */
  finish_planned_at: Date;
  /**
   * Дата завершения заказа
   */
  finished_at: Date;
  /**
   * Дата начала заказа
   */
  start_planned_at: Date;
  /**
   * Дата начала заказа
   */
  started_at: Date;
  /**
   * Дата создания заказа
   */
  created_at: Date;
}

export interface ITreeNode {
  id: number;
  parentId: number | null;
  type: "brigade" | "workplace";
  name: string;
  ordersQuantity?: number;
  ordersTotalSum?: number;
  workload?: number;
  worker?: {
    id: number;
    name: string;
    surname: string;
    patronymic: string;
    position: string;
    image?: string;
    isBrigadier?: boolean;
    orders?: TOrder[];
  };
  children?: ITreeNode[];
}

export interface ITreeProps {
  nodes: ITreeNode[];
  size?: "small" | "medium";
  selectable?: boolean;
  selectedNodes?: any[];
  onSelect?: any;
  onClick?: (node: ITreeNode) => void;
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
  onClick?: (node: ITreeNode) => void;
}
