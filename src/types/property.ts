export interface Property {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  type: 'venda' | 'aluguel';
  propertyType: string;
  price: number;
  description: string;
  mainImage: any;
  bedrooms: number;
  bathrooms: number;
  area: number;
  address: string;
}
