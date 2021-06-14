export interface Restaurant{
  name: string;
  address: string;
  city: string;
  state: string;
  zip: number;
  type: Category[];
  img: string;
}
interface Category {
  alias: string;
  title: string;
}
