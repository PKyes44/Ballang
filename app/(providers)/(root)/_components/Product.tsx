import { ProductType } from "@/types/product.type";

interface ProductProps {
  product: ProductType;
}

function Product({ product }: ProductProps) {
  return (
    <article className="w-full h-full flex flex-col text-sm gap-y-3 group">
      <img
        className="object-contain group-hover:scale-105 transition-all"
        src={product.imgSrc}
        alt="product Image"
      />
      <span className="font-semibold">{product.brand.nameEn}</span>
      <span>{product.name}</span>
      <div className="flex gap-x-2 font-semibold text-base">
        <span className="line-through text-red-500">
          ₩{product.originalPrice.toLocaleString("ko-KR")}
        </span>
        <span>₩{product.price.toLocaleString("ko-KR")}</span>
      </div>
    </article>
  );
}

export default Product;
