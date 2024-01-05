export interface Location {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface Apartment {
  id: number;
  title: string;
  type: string;
  address: string;
  image: string;
  price: number;
  description: string;
  lat: number;
  lon: number;
}
