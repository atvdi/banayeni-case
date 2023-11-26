export const formatPrice = (price: number) =>
  price.toLocaleString("tr", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
