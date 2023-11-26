export interface IProduct {
  id: string;
  itemName: string;
  price: number;
  currencyTypeName: string;
  instalment: string;
  sliderImage: ISliderImage[];
  description: string;
  tag: ITag[];
  seller: ISeller;
}

export interface ISliderImage {
  imageUrl: string;
}

export interface ITag {
  tagName: string;
  tagBackgroundColor: string;
  tagTextColor: string;
}

export interface ISeller {
  name: string;
  description: string;
  rating: number;
  totalSold: number;
}
