import Page from "@/components/Page/Page";
import React from "react";
import CartList from "./_components/CartList";

function CartPage() {
  return (
    <Page title="장바구니" className="px-5">
      <hr />
      <CartList />
    </Page>
  );
}

export default CartPage;
