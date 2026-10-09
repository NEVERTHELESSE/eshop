import type { ImageT } from "~/types/type";

export default function Image({ src, alt }: ImageT) {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full object-cover h-full bg-contain"
    />
  );
}
