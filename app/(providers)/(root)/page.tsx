import api from "@/api/api";
import Page from "@/components/Page/Page";
import ProductList from "./_components/ProductList";

export const revalidate = 60 * 10;

export default async function Home() {
  const products = await api.products.getProducts();

  return (
    <Page
      width="lg"
      title="Trending"
      className="flex flex-col gap-x-5 items-center mx-5"
    >
      <ProductList products={products} />
    </Page>
  );
}
