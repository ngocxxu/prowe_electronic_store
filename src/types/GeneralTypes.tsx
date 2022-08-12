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
  quantity: 1,
  total: number;
};
