export interface IUser {
  id?: number;
  email?: string;
  password?: string;
  username?: string;
  access?: string;
  refresh?: string;
  user?: any | null;
}

export interface IUserStore {
  user: IUser;
}
export interface IToken {
  access: string;
  refresh: string;
}

export interface IBookStore {
  books: IBooks[];
  favorites: any;
  oneBook: any;
  countTotal: number;
  searchValue: string;
  items: ICartItem[];
  count: number;
  totalPrice: number;
}
export interface ICartItem {
  isbn13?: string;
  title?: string;
  image?: string;
  price?: string;
  quantity?: number;
  count?: number;
}
export interface ICartStore {
  items: IBooks[];
}
export interface IBooks {
  image?: string;
  isbn13?: string;
  price?: string;
  subtitle?: string;
  title?: string;
  url?: string;
  count: number;
}
export interface IOneBook {
  authors: string;
  desc: string;
  image: string;
  language: string;
  price: string;
  pages: string;
  publisher: string;
  rating: string;
  subtitle: string;
  title: string;
  year: string;
  isbn13: string;
}
export interface ISettingsStore {
  activeTab: string;
  page: number;
  pageSize: number;
}

export interface IStore {
  books: IBookStore;
  user: IUserStore;
  settings: ISettingsStore;
  cart: ICartStore;
}

export interface IBookListProps {
  books: IBooks[];
  searchValue: string;
}
