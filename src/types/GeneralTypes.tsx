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
}

export type IProductAPI = {
  _id: {
        $oid: string,
      };
  name: string;
  description: string;
  price: {
    raw: number;
  };
  categories: string[];
  inventory: number;
  is: {
    hot: boolean;
    sale: boolean;
    available: boolean;
  };
  image: {
    main: string;
    library: string[];
  };
  updatedAt: {
        $date: string,
      };
};
