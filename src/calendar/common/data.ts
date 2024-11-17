export interface ITreeNode {
  id: number;
  label: string;
  children?: ITreeNode[];
}

export const initialBrigadeList: ITreeNode[] = [
  {
    id: 1,
    label: "Root",
    children: [
      {
        id: 2,
        label: "Child 1",
        children: [
          {
            id: 3,
            label: "Child 1-1",
            children: [
              { id: 4, label: "Child 1-1-1" },
              { id: 5, label: "Child 1-1-2" },
              { id: 6, label: "Child 1-1-3" },
            ],
          },
          {
            id: 7,
            label: "Child 1-2",
            children: [
              { id: 8, label: "Child 1-2-1" },
              { id: 9, label: "Child 1-2-2" },
              { id: 10, label: "Child 1-2-3" },
            ],
          },
          {
            id: 11,
            label: "Child 1-3",
            children: [
              { id: 12, label: "Child 1-3-1" },
              { id: 13, label: "Child 1-3-2" },
              { id: 14, label: "Child 1-3-3" },
            ],
          },
        ],
      },
      {
        id: 15,
        label: "Child 2",
        children: [
          {
            id: 16,
            label: "Child 2-1",
            children: [
              { id: 17, label: "Child 2-1-1" },
              { id: 18, label: "Child 2-1-2" },
              { id: 19, label: "Child 2-1-3" },
            ],
          },
          {
            id: 20,
            label: "Child 2-2",
            children: [
              { id: 21, label: "Child 2-2-1" },
              { id: 22, label: "Child 2-2-2" },
              { id: 23, label: "Child 2-2-3" },
            ],
          },
          {
            id: 24,
            label: "Child 2-3",
            children: [
              { id: 25, label: "Child 2-3-1" },
              { id: 26, label: "Child 2-3-2" },
              { id: 27, label: "Child 2-3-3" },
            ],
          },
        ],
      },
      {
        id: 28,
        label: "Child 3",
        children: [
          {
            id: 29,
            label: "Child 3-1",
            children: [
              { id: 30, label: "Child 3-1-1" },
              { id: 31, label: "Child 3-1-2" },
              { id: 32, label: "Child 3-1-3" },
            ],
          },
          {
            id: 33,
            label: "Child 3-2",
            children: [
              { id: 34, label: "Child 3-2-1" },
              { id: 35, label: "Child 3-2-2" },
              { id: 36, label: "Child 3-2-3" },
            ],
          },
          {
            id: 37,
            label: "Child 3-3",
            children: [
              { id: 38, label: "Child 3-3-1" },
              { id: 39, label: "Child 3-3-2" },
              { id: 40, label: "Child 3-3-3" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    label: "Root",
    children: [
      {
        id: 2,
        label: "Child 1",
        children: [
          {
            id: 3,
            label: "Child 1-1",
            children: [
              { id: 4, label: "Child 1-1-1" },
              { id: 5, label: "Child 1-1-2" },
              { id: 6, label: "Child 1-1-3" },
            ],
          },
          {
            id: 7,
            label: "Child 1-2",
            children: [
              { id: 8, label: "Child 1-2-1" },
              { id: 9, label: "Child 1-2-2" },
              { id: 10, label: "Child 1-2-3" },
            ],
          },
          {
            id: 11,
            label: "Child 1-3",
            children: [
              { id: 12, label: "Child 1-3-1" },
              { id: 13, label: "Child 1-3-2" },
              { id: 14, label: "Child 1-3-3" },
            ],
          },
        ],
      },
      {
        id: 15,
        label: "Child 2",
        children: [
          {
            id: 16,
            label: "Child 2-1",
            children: [
              { id: 17, label: "Child 2-1-1" },
              { id: 18, label: "Child 2-1-2" },
              { id: 19, label: "Child 2-1-3" },
            ],
          },
          {
            id: 20,
            label: "Child 2-2",
            children: [
              { id: 21, label: "Child 2-2-1" },
              { id: 22, label: "Child 2-2-2" },
              { id: 23, label: "Child 2-2-3" },
            ],
          },
          {
            id: 24,
            label: "Child 2-3",
            children: [
              { id: 25, label: "Child 2-3-1" },
              { id: 26, label: "Child 2-3-2" },
              { id: 27, label: "Child 2-3-3" },
            ],
          },
        ],
      },
      {
        id: 28,
        label: "Child 3",
        children: [
          {
            id: 29,
            label: "Child 3-1",
            children: [
              { id: 30, label: "Child 3-1-1" },
              { id: 31, label: "Child 3-1-2" },
              { id: 32, label: "Child 3-1-3" },
            ],
          },
          {
            id: 33,
            label: "Child 3-2",
            children: [
              { id: 34, label: "Child 3-2-1" },
              { id: 35, label: "Child 3-2-2" },
              { id: 36, label: "Child 3-2-3" },
            ],
          },
          {
            id: 37,
            label: "Child 3-3",
            children: [
              { id: 38, label: "Child 3-3-1" },
              { id: 39, label: "Child 3-3-2" },
              { id: 40, label: "Child 3-3-3" },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 1,
    label: "Root",
    children: [
      {
        id: 2,
        label: "Child 1",
        children: [
          {
            id: 3,
            label: "Child 1-1",
            children: [
              { id: 4, label: "Child 1-1-1" },
              { id: 5, label: "Child 1-1-2" },
              { id: 6, label: "Child 1-1-3" },
            ],
          },
          {
            id: 7,
            label: "Child 1-2",
            children: [
              { id: 8, label: "Child 1-2-1" },
              { id: 9, label: "Child 1-2-2" },
              { id: 10, label: "Child 1-2-3" },
            ],
          },
          {
            id: 11,
            label: "Child 1-3",
            children: [
              { id: 12, label: "Child 1-3-1" },
              { id: 13, label: "Child 1-3-2" },
              { id: 14, label: "Child 1-3-3" },
            ],
          },
        ],
      },
      {
        id: 15,
        label: "Child 2",
        children: [
          {
            id: 16,
            label: "Child 2-1",
            children: [
              { id: 17, label: "Child 2-1-1" },
              { id: 18, label: "Child 2-1-2" },
              { id: 19, label: "Child 2-1-3" },
            ],
          },
          {
            id: 20,
            label: "Child 2-2",
            children: [
              { id: 21, label: "Child 2-2-1" },
              { id: 22, label: "Child 2-2-2" },
              { id: 23, label: "Child 2-2-3" },
            ],
          },
          {
            id: 24,
            label: "Child 2-3",
            children: [
              { id: 25, label: "Child 2-3-1" },
              { id: 26, label: "Child 2-3-2" },
              { id: 27, label: "Child 2-3-3" },
            ],
          },
        ],
      },
      {
        id: 28,
        label: "Child 3",
        children: [
          {
            id: 29,
            label: "Child 3-1",
            children: [
              { id: 30, label: "Child 3-1-1" },
              { id: 31, label: "Child 3-1-2" },
              { id: 32, label: "Child 3-1-3" },
            ],
          },
          {
            id: 33,
            label: "Child 3-2",
            children: [
              { id: 34, label: "Child 3-2-1" },
              { id: 35, label: "Child 3-2-2" },
              { id: 36, label: "Child 3-2-3" },
            ],
          },
          {
            id: 37,
            label: "Child 3-3",
            children: [
              { id: 38, label: "Child 3-3-1" },
              { id: 39, label: "Child 3-3-2" },
              { id: 40, label: "Child 3-3-3" },
            ],
          },
        ],
      },
    ],
  },
];
