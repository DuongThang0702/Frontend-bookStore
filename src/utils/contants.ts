import path from "./path";

export const navigationLink = [
  {
    id: 18,
    value: "Home",
    path: path.HOME,
  },
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
  {
    id: 16,
    value: "Pride Month",
    path: path.PRIDE_MONTH,
  },
  {
    id: 17,
    value: "YA",
    path: path.YA,
  },
];

export const footerLink = [
  { id: 1, path: path.ABOUT, value: "About" },
  { id: 4, path: path.CONTACT, value: "Contact" },
  { id: 3, path: path.GIFTCARD, value: "Gift Card" },
  { id: 2, path: path.BECOME_AN_AFFILIATE, value: "Become an affiliate" },
  { id: 5, path: path.TERMS_OF_USE, value: "Returns and Refund Policy" },
  { id: 6, path: path.FAQ, value: "Indiebound - Bookshop Changeover FAQ" },
];
