export interface IPhotoPreviewProps {
  image: string | File;
  onRemove: () => void;
}

export interface IImage {
  id: string;
  url: string;
  publicId: string;
  storeId?: string;
  variantId?: string;
}
