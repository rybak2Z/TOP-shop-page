import { Link } from "react-router-dom";

function TitleBar() {
  return (
    <header>
      ScamBay
      <Link to="cart">Cart</Link>
    </header>
  );
}

export default TitleBar;
