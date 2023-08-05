const path = {
  //Public
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
  //submenu fiction
  FICTION: "books/category/fiction?page=1",
  FANTASY: "books/category/fantasy?page=1",
  POETRY: "books/category/poetry?page=1",
  historicalFiction: "books/category/historicalfiction?page=1",
  //submenu nonfiction
  NONFICTION: "nonfiction",
  TRAVEL: "books/category/travel?page=1",
  MYSTERY: "books/category/mystery?page=1",
  PHILOSOPHY: "books/category/philosophy?page=1",
  BUSINESS: "books/category/business?page=1",
  AUTOBIOGRAPHY: "books/category/autobiography?page=1",
  //footer homepage
  ABOUT: "about-us",
  BECOME_AN_AFFILIATE: "service/become-an-affiliate",
  CONTACT: "contact",
  TERMS_OF_USE: "terms-of-use",
  FAQ: "Indiebound-Bookshop-Changeover-FAQ",
  PRIVATE_NOTICE: "private-notice",

  //Admin
  ADMIN: "admin",
  DASHBOARD: "dashboard",
  CREATE_BOOK: "create-books",
  MANAGE_BOOKS: "manage-books",
  MANAGE_USER: "manage-user",
  MANAGE_ORDER: "manage-order",
  //Member
  MEMBER: "member",
  PERSONAL: "personal",
  MY_CART: "my-cart",
  BUY_HISTORIES: "buy-histories",
  WISHLISH: "wishlist",
};

export default path;
