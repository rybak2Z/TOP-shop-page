import { Link, useLocation } from "react-router-dom";

function CartPage() {
  const location = useLocation();
  const { itemsInCart } = location.state;

  return (
    <>
      <Link to="/">Back to shop</Link>
      <h1>Cart Page</h1>
      {itemsInCart.map((productTitle, idx) => (
        <div key={idx}>
          <p>{productTitle}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default CartPage;
