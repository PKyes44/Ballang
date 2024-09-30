import api from "@/api/api";
import Page from "@/components/Page/Page";
import { Products } from "@/types/product.type";
import ProductList from "./_components/ProductList";

export default async function Home() {
	const products = (await api.products.getProducts()) as Products;
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
