export interface IPhotoPreviewProps {
  image: string;
  onRemove: () => void;
}

export interface IImage {
  id: string;
  url: string;
  publicId: string;
  storeId?: string;
  variantId?: string;
}
