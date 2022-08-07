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
