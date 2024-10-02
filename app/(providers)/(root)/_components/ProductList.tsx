import { Products } from "@/types/product.type";
import Link from "next/link";
import Product from "./Product";

interface ProductListProps {
  products: Products;
}

async function ProductList({ products }: ProductListProps) {
  return (
    <ul className="w-full grid xl:grid-cols-6 gap-x-8 gap-y-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
      {products.map((product) => {
        return (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              <Product product={product} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ProductList;
