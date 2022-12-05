import { AlertColor } from '@mui/material';

// MATERIAL UI
export interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export interface ChipData {
  key: number;
  label: string;
}

// SWIPER
export type SwiperProps = {
  arrayInsta?: {
    image: string;
    content: string;
  }[];
};

// REDUX
export interface OtherState {
  activeStep: number;
  isDrawer: boolean;
  isOpenModal: boolean;
  notify: {
    isNotification: boolean;
    severity?: AlertColor;
    message?: string;
  };
}

export type IHomeProps = {
  dataAllProducts: IProduct[];
};

// USER
export type UserState = {
  myInfo: IUser;
};

export type IUser = {
  _id: string;
  email: string;
  password?: string;
  idCart: string;
  idFavor: string;
  isAdmin: boolean;
};

// AUTH
export type IAuth = {
  accessToken: string;
  refreshToken?: string;
};

// PRODUCT
export interface IProductCart extends IProduct {
  product: IProduct;
  subQuantity: number;
  subTotalProduct: number;
  isDeleted: boolean;
}

export type IProduct = {
  _id: string;
  name: string;
  description: string;
  price: {
    raw: number;
  };
  categories: string[];
  inventory: number;
  sale: number;
  is: {
    hot: boolean;
    new: boolean;
    sale: boolean;
    available: boolean;
    delete: boolean;
  };
  image: {
    main: string;
    library: string[];
  };
};

// CART
export type ICart = {
  idCart: string;
  totalItems: number;
  subTotal: number;
  lineItems: IProductCart[];
  discount: string[];
};
