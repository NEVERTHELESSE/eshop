type priceType = {
  price: number;
};

const currencies = [
  {
    id: "1",
    country: "nigeria",
    currency: "₦",
    currencyCode: "ngn",
  },
];

export default function Price({ price }: priceType) {
  return <h4>₦ {price.toLocaleString()}</h4>;
}
