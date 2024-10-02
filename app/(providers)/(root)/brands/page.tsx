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

  if (!products) return <span>데이터를 불러오는 데에 실패하였습니다</span>;

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
