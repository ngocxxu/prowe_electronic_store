import { AlertColor } from '@mui/material';

// MATERIAL UI
export interface HeaderProps {
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
  isOpenQuickViewModal: boolean;
  stateToggleDrawer: {
    anchor: string;
    open: boolean;
  };
  notify: {
    isNotification: boolean;
    severity?: AlertColor;
    message?: string;
    vertical: "top" | "bottom";
    horizontal: "left" | "center" | "right";
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
  avgReviews: number;
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

// FAVOR
export type IFavor = {
  idFavor: string;
  favorItems: IProductCart[];
};

// COMMENT
export type IComment = {
  userId: IUser;
  content: string;
  rate: number;
  createdAt: string | Date;
  updatedAt: string | Date;
};

// CHECKOUT FORM
export type TCheckoutForm = {
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: TCheckoutFormValues;
};

// CHECKOUT SHIPPING
export type TCheckoutShipping = {
  handleChange: (e: React.ChangeEvent<any>) => void;
  values: TCheckoutFormValues;
};

export type TCheckoutFormValues = {
  country: string;
  name: string;
  address: string;
  apartment: string;
  city: string;
  zip: string;
  shippingMethod: string;
  cardNumber: number | string;
  expYear: number | string;
  expMonth: number | string;
  CVCAndCVV: number | string;
};
