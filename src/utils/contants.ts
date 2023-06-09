import path from "./path";

export const navigationLink = [
  {
    id: 1,
    value: "Gift Cards",
    path: path.GIFTCARD,
  },

  {
    id: 2,
    value: "Best Sellers",
    path: path.BESTSELLER,
  },
  {
    id: 3,
    value: "New Books",
    path: path.NEWBOOKS,
  },

  {
    id: 4,
    value: "Fiction",
    path: path.FICTION,
    subMenu: [
      { id: 5, value: "Poetry", path: path.POETRY },
      { id: 6, value: "Fantasy", path: path.FANTASY },
      { id: 7, value: "HistoricalFiction", path: path.historicalFiction },
    ],
  },

  {
    id: 8,
    value: "Nonfiction",
    path: path.NONFICTION,
    subMenu: [
      { id: 9, value: "Travel", path: path.TRAVEL },
      { id: 10, value: "Mystery", path: path.MYSTERY },
      { id: 11, value: "Philosophy", path: path.PHILOSOPHY },
      { id: 12, value: "Business", path: path.BUSINESS },
      { id: 13, value: "Autobiography", path: path.AUTOBIOGRAPHY },
    ],
  },

  {
    id: 15,
    value: "Blog",
    path: path.BLOG,
  },
];
