import { AlertColor } from '@mui/material';

export interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

export type SwiperProps = {
  arrayInsta?: {
    image: string;
    content: string;
  }[];
};

export interface ChipData {
  key: number;
  label: string;
}

export type IProduct = {
  _id: string;
  name: string;
  code: string;
  price: number;
  image: HTMLImageElement | String | File;
  quantity: 1;
  total: number;
};

export interface OtherState {
  activeStep: number;
  isDrawer: boolean;
  notify: {
    isNotification: boolean;
    severity?: AlertColor;
    message?: string;
  };
}

export type UserState = {
  myInfo: IUser;
};

export type IProductAPI = {
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

export type IUser = {
  _id?: string;
  email: string;
  password?: string;
  isAdmin?: boolean;
};

export type IAuth = {
  accessToken: string;
  refreshToken?: string;
};

export type IHomeProps = {
  dataAllProducts: IProductAPI[];
};
