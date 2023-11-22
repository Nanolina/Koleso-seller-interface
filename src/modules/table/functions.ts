export const getDataTable = (
  data: Record<string, any>[]
): (string | number)[][] => {
  return data.map(({ id, ...itemWithoutId }) => Object.values(itemWithoutId));
};

export const isImageUrl = (url: string) => {
  return /\.(jpg|jpeg|png|gif|bmp|svg)$/i.test(url);
};
