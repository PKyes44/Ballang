import { ProductType } from "@/types/product.type";
import Link from "next/link";
import AddCartButton from "./AddCartButton";

interface ProductDetailProps {
  product: ProductType;
}

function ProductDetail({ product }: ProductDetailProps) {
  return (
    <>
      <div className="mt-9">
        <img src={product.imgSrc} alt="product image" className="w-full" />
      </div>
      <div className="mt-16 flex flex-col gap-y-2">
        <Link
          href={`/brands?brandId=${product.brandId}`}
          className="font-extrabold"
        >
          {product.brand.nameKr} / {product.brand.nameEn}
        </Link>
        <hr />
        <span className="text-lg">{product.name}</span>
        <div className="grid grid-cols-2 pr-72 font-extrabold gap-y-5 mt-10">
          <span>정가</span>
          <span className="line-through text-red-500 font-medium">
            ₩{product.originalPrice.toLocaleString("ko-Kr")}
          </span>
          <span>판매가</span>
          <span className="">₩{product.price.toLocaleString("ko-Kr")}</span>
          <span>배송</span>
          <span className="font-normal">{product.deliveryType}</span>
          <span>잔여 재고</span>
          <span className="font-normal">{product.onlineStock}</span>
        </div>
        <AddCartButton productId={product.id} />
      </div>
    </>
  );
}

export default ProductDetail;
