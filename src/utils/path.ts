const path = {
  PUBLIC: "*",
  //user
  LOGIN: "login",
  SIGNUP: "sign-up",
  FORGOT_PASSWORD: "forgot-password",
  PROFILE: "profile",
  LOGOUT: "logout",
  //navigation
  HOME: "/",
  DETAIL_BOOK: "book", // book/:slug/:bid/:title
  NEWBOOKS: "books/list/new-books",
  GIFTCARD: "service/gift-card",
  BLOG: "service/blog",
  PRIDE_MONTH: "pride-month",
  //navigation sort by category
  YA: "books/category/fiction?page=1",
  BESTSELLER: "books/category/best-seller?page=1",
  //fiction
  FICTION: "books/category/fiction?page=1",
  FANTASY: "books/category/fantasy?page=1",
  POETRY: "books/category/poetry?page=1",
  historicalFiction: "books/category/historicalfiction?page=1",
  //nonfiction
  NONFICTION: "nonfiction",
  TRAVEL: "books/category/travel?page=1",
  MYSTERY: "books/category/mystery?page=1",
  PHILOSOPHY: "books/category/philosophy?page=1",
  BUSINESS: "books/category/business?page=1",
  AUTOBIOGRAPHY: "books/category/autobiography?page=1",
  //footer
  ABOUT: "about-us",
  BECOME_AN_AFFILIATE: "become-an-affiliate",
  CONTACT: "contact",
  TERMS_OF_USE: "terms-of-use",
  FAQ: "Indiebound-Bookshop-Changeover-FAQ",

  //login
  PRIVATE_NOTICE: "private-notice",
};

export default path;
