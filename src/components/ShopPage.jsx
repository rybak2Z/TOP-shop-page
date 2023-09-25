import { useState } from "react";
import ItemList from "./ItemList";
import TitleBar from "./TitleBar";

function ShopPage() {
  const [itemsInCart, setItemsInCart] = useState([]);

  function handleAddToCart(productTitle) {
    setItemsInCart([...itemsInCart, productTitle]);
  }

  return (
    <>
      <TitleBar itemsInCart={itemsInCart} />
      <ItemList handleAddToCart={handleAddToCart} />
    </>
  );
}

export default ShopPage;
