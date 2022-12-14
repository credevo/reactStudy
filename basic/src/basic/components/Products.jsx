import React, { useEffect, useState } from "react";

export default function Products() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch(`data/${checked ? "sale_" : ""}products.json`)
      .then((res) => res.json())
      .then((json) => setProducts(json));

    console.log("πππππμμ± λμμ΅λλ€.");

    return () => {
      console.log("π§Ήπ§Ήπ§Ήπ§Ήπ§Ήμ­μ  λμμ΅λλ€.");
    };
  }, [checked]);

  return (
    <>
      <div>
        <input
          id="checkSale"
          type="checkbox"
          value={checked}
          onChange={() => setChecked((prev) => !prev)}
        />
        <label htmlFor="checkSale">HOT sale</label>
      </div>
      <ul>
        {products.map((product, index) => (
          <li key={product.id ?? index}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </>
  );
}
