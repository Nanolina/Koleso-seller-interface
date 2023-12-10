export const isImageUrl = (url: string) => {
  return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
};
