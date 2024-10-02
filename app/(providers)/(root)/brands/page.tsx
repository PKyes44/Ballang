import api from "@/api/api";
import Page from "@/components/Page/Page";
import { Products } from "@/types/product.type";
import ProductList from "../_components/ProductList";
import BrandList from "./_components/BrandList";

async function BrandsPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string };
}) {
  let products;
  if (Object.keys(searchParams!).length === 0)
    products = (await api.products.getProducts()) as Products;
  else {
    products = await api.brands.getBrand(searchParams!.brandId);
  }
  return (
    <Page width="lg" title="Brands" className="mx-5">
      <BrandList
        activatedBrandId={searchParams?.brandId ? searchParams!.brandId : null}
      />
      <ProductList products={products} />
    </Page>
  );
}

export default BrandsPage;
