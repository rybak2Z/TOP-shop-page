import { useEffect } from "react";
import { useState } from "react";
import ItemCard from "./ItemCard";

function ItemList() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products", { mode: "cors" })
      .then((response) => {
        if (response.status >= 400) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (error) {
    return <p>An error occurred</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

  return <div>{generateList(products)}</div>;
}

function generateList(itemsData) {
  const list = [];
  for (const item of itemsData.values()) {
    list.push(
      <ItemCard
        title={item.title}
        price={item.price}
        rating={item.rating}
        key={item.id}
      />,
    );
  }
  return list;
}

export default ItemList;
