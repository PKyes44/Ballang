import api from "@/api/api";
import CartItem from "./CartItem";

async function CartList() {
  const cartList = await api.cart.getCart();

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
