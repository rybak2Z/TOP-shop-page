import { useEffect } from "react";
import { useState } from "react";

function ItemList() {
  const [data, setData] = useState(null);
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
        setData(response);
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

  return <div>{generateList(data)}</div>;
}

function generateList(itemsData) {
  const list = [];
  for (const item of itemsData.values()) {
    list.push(<p key={item.id}>{item.title}</p>);
  }
  return list;
}

export default ItemList;
