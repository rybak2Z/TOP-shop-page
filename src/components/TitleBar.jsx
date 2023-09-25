import { Link } from "react-router-dom";

function TitleBar(props) {
  return (
    <header>
      ScamBay
      <Link to="cart" state={{ itemsInCart: props.itemsInCart }}>
        Cart
      </Link>
    </header>
  );
}

export default TitleBar;
