type ProductTitleType = {
  title: string;
};
export default function ProductTitle({ title }: ProductTitleType) {
  return (
    <div>
      <p>{title}</p>
    </div>
  );
}
