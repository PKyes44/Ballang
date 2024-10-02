import api from "@/api/api";
import Page from "@/components/Page/Page";
import ProductList from "./_components/ProductList";

export const revalidate = 60 * 10;

export default async function Home() {
  const products = await api.products.getProducts();

  if (!products) return <span>데이터를 불러오는 데에 실패하였습니다</span>;

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
