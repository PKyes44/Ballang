import api from "@/api/api";
import Page from "@/components/Page/Page";
import { ProductType } from "@/types/product.type";
import AddCartButton from "./_components/AddCartButton";
import ProductDetail from "./_components/ProductDetail";

interface ProductPageProps {
	params: { productId: number };
}

async function ProductPage({ params: { productId } }: ProductPageProps) {
	const product = (await api.products.getProductByProductId(
		productId
	)) as ProductType;

	return (
		<Page className="grid grid-cols-2 gap-x-5">
			<ProductDetail product={product} />
		</Page>
	);
}

export default ProductPage;
