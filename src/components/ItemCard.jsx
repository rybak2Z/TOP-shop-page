import PropTypes from "prop-types";

function ItemCard(props) {
  return (
    <div>
      <p>
        {props.title} {props.price}
      </p>
      <p>
        {props.rating.rate} ({props.rating.count})
      </p>
      <button onClick={() => props.handleAddToCart(props.title)}>
        Add to cart
      </button>
      <hr />
    </div>
  );
}

ItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.exact({
    rate: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default ItemCard;
