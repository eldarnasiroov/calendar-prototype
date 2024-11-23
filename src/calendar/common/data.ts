// export interface ITreeNode {
//   id: number;
//   label: string;
//   children?: ITreeNode[];
// }

interface ITreeNode {
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

// export const initialBrigadeList: ITreeNode[] = [
//   {
//     id: 1,
//     label: "Root",
//     children: [
//       {
//         id: 2,
//         label: "Child 1",
//         children: [
//           {
//             id: 3,
//             label: "Child 1-1",
//             children: [
//               { id: 4, label: "Child 1-1-1" },
//               { id: 5, label: "Child 1-1-2" },
//               { id: 6, label: "Child 1-1-3" },
//             ],
//           },
//           {
//             id: 7,
//             label: "Child 1-2",
//             children: [
//               { id: 8, label: "Child 1-2-1" },
//               { id: 9, label: "Child 1-2-2" },
//               { id: 10, label: "Child 1-2-3" },
//             ],
//           },
//           {
//             id: 11,
//             label: "Child 1-3",
//             children: [
//               { id: 12, label: "Child 1-3-1" },
//               { id: 13, label: "Child 1-3-2" },
//               { id: 14, label: "Child 1-3-3" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 15,
//         label: "Child 2",
//         children: [
//           {
//             id: 16,
//             label: "Child 2-1",
//             children: [
//               { id: 17, label: "Child 2-1-1" },
//               { id: 18, label: "Child 2-1-2" },
//               { id: 19, label: "Child 2-1-3" },
//             ],
//           },
//           {
//             id: 20,
//             label: "Child 2-2",
//             children: [
//               { id: 21, label: "Child 2-2-1" },
//               { id: 22, label: "Child 2-2-2" },
//               { id: 23, label: "Child 2-2-3" },
//             ],
//           },
//           {
//             id: 24,
//             label: "Child 2-3",
//             children: [
//               { id: 25, label: "Child 2-3-1" },
//               { id: 26, label: "Child 2-3-2" },
//               { id: 27, label: "Child 2-3-3" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 28,
//         label: "Child 3",
//         children: [
//           {
//             id: 29,
//             label: "Child 3-1",
//             children: [
//               { id: 30, label: "Child 3-1-1" },
//               { id: 31, label: "Child 3-1-2" },
//               { id: 32, label: "Child 3-1-3" },
//             ],
//           },
//           {
//             id: 33,
//             label: "Child 3-2",
//             children: [
//               { id: 34, label: "Child 3-2-1" },
//               { id: 35, label: "Child 3-2-2" },
//               { id: 36, label: "Child 3-2-3" },
//             ],
//           },
//           {
//             id: 37,
//             label: "Child 3-3",
//             children: [
//               { id: 38, label: "Child 3-3-1" },
//               { id: 39, label: "Child 3-3-2" },
//               { id: 40, label: "Child 3-3-3" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     id: 41,
//     label: "Root",
//     children: [
//       {
//         id: 42,
//         label: "Child 1",
//         children: [
//           {
//             id: 43,
//             label: "Child 1-1",
//             children: [
//               { id: 44, label: "Child 1-1-1" },
//               { id: 45, label: "Child 1-1-2" },
//               { id: 46, label: "Child 1-1-3" },
//             ],
//           },
//           {
//             id: 47,
//             label: "Child 1-2",
//             children: [
//               { id: 48, label: "Child 1-2-1" },
//               { id: 49, label: "Child 1-2-2" },
//               { id: 50, label: "Child 1-2-3" },
//             ],
//           },
//           {
//             id: 51,
//             label: "Child 1-3",
//             children: [
//               { id: 52, label: "Child 1-3-1" },
//               { id: 53, label: "Child 1-3-2" },
//               { id: 54, label: "Child 1-3-3" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 55,
//         label: "Child 2",
//         children: [
//           {
//             id: 56,
//             label: "Child 2-1",
//             children: [
//               { id: 57, label: "Child 2-1-1" },
//               { id: 58, label: "Child 2-1-2" },
//               { id: 59, label: "Child 2-1-3" },
//             ],
//           },
//           {
//             id: 60,
//             label: "Child 2-2",
//             children: [
//               { id: 61, label: "Child 2-2-1" },
//               { id: 62, label: "Child 2-2-2" },
//               { id: 63, label: "Child 2-2-3" },
//             ],
//           },
//           {
//             id: 64,
//             label: "Child 2-3",
//             children: [
//               { id: 65, label: "Child 2-3-1" },
//               { id: 66, label: "Child 2-3-2" },
//               { id: 67, label: "Child 2-3-3" },
//             ],
//           },
//         ],
//       },
//       {
//         id: 68,
//         label: "Child 3",
//         children: [
//           {
//             id: 69,
//             label: "Child 3-1",
//             children: [
//               { id: 70, label: "Child 3-1-1" },
//               { id: 71, label: "Child 3-1-2" },
//               { id: 72, label: "Child 3-1-3" },
//             ],
//           },
//           {
//             id: 73,
//             label: "Child 3-2",
//             children: [
//               { id: 74, label: "Child 3-2-1" },
//               { id: 75, label: "Child 3-2-2" },
//               { id: 76, label: "Child 3-2-3" },
//             ],
//           },
//           {
//             id: 77,
//             label: "Child 3-3",
//             children: [
//               { id: 78, label: "Child 3-3-1" },
//               { id: 79, label: "Child 3-3-2" },
//               { id: 80, label: "Child 3-3-3" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// ];

export const test: ITreeNode[] = [
  {
    id: 1,
    parentId: null,
    name: "Корневая бригада",
    type: "brigade",
    ordersQuantity: 6,
    ordersTotalSum: 50000,
    workload: 45,
    brigadier: {
      id: 1,
      name: "Саша",
      surname: "Белый",
      patronymic: "Иванович",
      position: "Директор",
    },
    children: [
      {
        id: 2,
        parentId: 1,
        name: "Бригада 1",
        type: "brigade",
        ordersQuantity: 3,
        ordersTotalSum: 30000,
        workload: 30,
        brigadier: {
          id: 2,
          name: "Виктор",
          surname: "Пчела",
          patronymic: "Алексеевич",
          position: "Менеджер",
        },
        children: [
          {
            id: 6,
            parentId: 2,
            name: "Бригада тест",
            type: "brigade",
            ordersQuantity: 3,
            ordersTotalSum: 30000,
            workload: 30,
            brigadier: {
              id: 2,
              name: "Евгений",
              surname: "Онегин",
              patronymic: "Алексеевич",
              position: "Менеджер",
            },
          },
          {
            id: 7,
            parentId: 2,
            name: "Маляр",
            type: "workplace",
            worker: {
              id: 5,
              name: "Семен",
              surname: "Слепаков",
              patronymic: "Александрович",
              position: "Маляр",
            },
          },
        ],
      },
      {
        id: 3,
        parentId: 1,
        name: "Бригада 2",
        type: "brigade",
        ordersQuantity: 6,
        ordersTotalSum: 300500,
        workload: 70,
        brigadier: {
          id: 3,
          name: "Космос",
          surname: "Холмогоров",
          patronymic: "Евгеньевич",
          position: "Старший механик",
        },
      },
      {
        id: 4,
        parentId: 1,
        name: "Шиномонтажник",
        type: "workplace",
        worker: {
          id: 5,
          name: "Александр",
          surname: "Кузнецов",
          patronymic: "Александрович",
          position: "Механик",
        },
      },
    ],
  },
];
