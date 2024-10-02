import api from "@/api/api";
import CartItem from "./CartItem";

async function CartList() {
  const cartList = await api.cart.getCartAtServerSide();
  if (!cartList) return <span>데이터를 불러올 수 없습니다</span>;
  return (
    <ul>
      {cartList!.map((cartItem) => {
        return (
          <li key={cartItem.product.id}>
            <CartItem cartItem={cartItem} />
            <hr />
          </li>
        );
      })}
    </ul>
  );
}

export default CartList;
