import path from "./path";
import { NavigationLink } from "./interface/ILayout";

export const navigationAboutPage = [
  { id: 1, value: "Gift Cards", path: path.GIFTCARD },
  { id: 2, value: "Best Seller", path: path.BESTSELLER },
  { id: 3, value: "New Books", path: path.NEWBOOKS },
  { id: 4, value: "Deals", path: path.BESTSELLER },
];

export const navigationLink: Array<NavigationLink> = [
  {
    id: 1,
    type: "single",
    value: "Home",
    path: path.HOME,
  },
  {
    id: 2,
    type: "single",
    value: "Gift Cards",
    path: path.GIFTCARD,
  },

  {
    id: 3,
    type: "single",
    value: "Best Sellers",
    path: path.BESTSELLER,
  },
  {
    id: 4,
    type: "single",
    value: "New Books",
    path: path.NEWBOOKS,
  },

  {
    id: 5,
    type: "parent",
    value: "Books",
    subMenu: [
      { id: 1, value: "Fiction", path: path.FICTION, type: "single" },
      { id: 2, value: "Poetry", path: path.POETRY, type: "single" },
      { id: 3, value: "Fantasy", path: path.FANTASY, type: "single" },
      {
        id: 4,
        value: "HistoricalFiction",
        path: path.historicalFiction,
        type: "single",
      },
    ],
  },

  {
    id: 6,
    type: "parent",
    value: "Nonfiction",
    subMenu: [
      { id: 1, value: "Travel", path: path.TRAVEL, type: "single" },
      { id: 2, value: "Mystery", path: path.MYSTERY, type: "single" },
      { id: 3, value: "Philosophy", path: path.PHILOSOPHY, type: "single" },
      { id: 4, value: "Business", path: path.BUSINESS, type: "single" },
      {
        id: 5,
        value: "Autobiography",
        path: path.AUTOBIOGRAPHY,
        type: "single",
      },
    ],
  },

  {
    type: "single",
    id: 7,
    value: "Blog",
    path: path.BLOG,
  },
  {
    type: "single",
    id: 8,
    value: "Pride Month",
    path: path.PRIDE_MONTH,
  },
  {
    type: "single",
    id: 9,
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

export const submenuUser = [
  { id: 1, value: "Profile", path: path.PROFILE },
  { id: 2, value: "Logout", path: path.LOGOUT },
];
