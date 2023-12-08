interface IArticleDetails {
  image: string;
  articleKoleso: string;
  articleSupplier: string;
  title: string;
  color: string;
  size: string;
  brand: string;
  quantity: number;
  unitPrice: string;
  totalPrice: string;
}

export interface IArticleDetailsProps {
  articleDetails: IArticleDetails;
  index: number;
}

export interface IItemDetailsProps {
  articleKoleso: string;
  articleSupplier: string;
  title: string;
  color: string;
  size: string;
  brand: string;
}

export interface ITextStringProps {
  label?: string;
  text: string | number;
}
