import api from "@/api/api";
import Page from "@/components/Page";
import ProductType from "./_components/Product";
import { Products } from "@/types/product.type";
import Product from "./_components/Product";
import Link from "next/link";

export default async function Home() {
	const products = (await api.products.getProducts()) as Products;
	return (
		<Page
			width="lg"
			title="Trending"
			className="flex flex-col gap-x-5 items-center"
		>
			<ul className="w-full grid grid-cols-6 gap-x-8 gap-y-8">
				{products.map((product) => {
					return (
						<li>
							<Link href={`/products/${product.id}`}>
								<Product product={product} />
							</Link>
						</li>
					);
				})}
			</ul>
		</Page>
	);
}
