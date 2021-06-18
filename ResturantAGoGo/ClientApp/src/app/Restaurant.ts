export interface Restaurant{
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  type: Category[];
  yelpID: string;
  img: string;
  url: string;
  rating: number;
  phone: string;
  price: string;
  latitude: number;
  longitude: number;
}
interface Category {
  alias: string;
  title: string;
}
