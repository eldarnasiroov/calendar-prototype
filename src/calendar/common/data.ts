import { ITreeNode } from "../../tree/common/types";

export const mockData: ITreeNode[] = [
  {
    id: 1,
    parentId: null,
    name: "Корневая бригада",
    type: "brigade",
    ordersQuantity: 6,
    ordersTotalSum: 50000,
    workload: 45,

    children: [
      {
        id: 2,
        parentId: 1,
        name: "Бригада 1",
        type: "brigade",
        ordersQuantity: 3,
        ordersTotalSum: 30000,
        workload: 30,

        children: [
          {
            id: 6,
            parentId: 2,
            name: "Бригада тест",
            type: "brigade",
            ordersQuantity: 3,
            ordersTotalSum: 30000,
            workload: 30,
            children: [
              {
                id: 9,
                parentId: 6,
                name: "Бригадир",
                type: "workplace",
                worker: {
                  id: 10,
                  name: "Артур",
                  surname: "Слепаков",
                  patronymic: "Александрович",
                  position: "Бригадир",
                  image: "no_image_worker.svg",
                  isBrigadier: true,
                },
              },
            ],
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
              image: "no_image_customer.svg",
            },
          },
          {
            id: 17,
            parentId: 2,
            name: "Бригадир",
            type: "workplace",
            worker: {
              id: 5,
              name: "Николай",
              surname: "Слепаков",
              patronymic: "Александрович",
              position: "Бригадир",
              image: "no_image_worker.svg",
              isBrigadier: true,
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
        children: [
          {
            id: 15,
            parentId: 3,
            name: "Бригадир",
            type: "workplace",
            worker: {
              id: 16,
              name: "Вячеслав",
              surname: "Слепаков",
              patronymic: "Александрович",
              position: "Бригадир",
              image: "no_image_worker.svg",
              isBrigadier: true,
            },
          },
        ],
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
          image: "no_image_customer.svg",
        },
      },
      {
        id: 8,
        parentId: 1,
        name: "Бригадир",
        type: "workplace",
        worker: {
          id: 5,
          name: "Михаил",
          surname: "Кузнецов",
          patronymic: "Александрович",
          position: "Бригадир",
          image: "no_image_worker.svg",
          isBrigadier: true,
        },
      },
    ],
  },
];
