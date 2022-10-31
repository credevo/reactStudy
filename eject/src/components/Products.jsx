import React, {
  useState,
  useEffect,
} from "react";

export default function Products() {
  const [products, setProducts] =
    useState([]);

  useEffect(() => {
    fetch("data/products.json")
      .then((response) =>
        response.json()
      )
      .then((json) =>
        setProducts(json)
      );
  }, []);

  return (
    <div>
      <ul>
        {products.map((p) => (
          <li>{p.name}</li>
        ))}
      </ul>
    </div>
  );
}

// import db from "../../products.json";
//   {
//     headers: {
//       "Content-Type":
//         "application/json",
//       Accept: "application/json",
//     },
//   }
