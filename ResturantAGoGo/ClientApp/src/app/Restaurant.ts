export interface Restaurant{
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  openNow: boolean;
  type: Category[];
  img: string;
}
interface Category {
  alias: string;
  title: string;
}
