import React, { useEffect, useState } from "react";
import Product from "./Product";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://barcelonacodeschool.com/files/reactB1products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const bestSellers = products.filter((product) => product.bestSeller);

  return (
    <main className="main">
      <section className="products">
        <div className="container">
          <div className="products__general">
            <h1 className="products__header">All products</h1>
            <div className="products__wrap">
              {products.map((el) => (
                <Product
                  key={el.product}
                  name={el.product}
                  image={el.image}
                  price={el.price}
                  onSale={el.onSale}
                />
              ))}
            </div>
          </div>

          <div className="products__bestsellers">
            <h1 className="products__header">Best Sellers</h1>
            <div className="products__wrap">
              {bestSellers.map((el) => (
                <Product
                  key={el.product}
                  name={el.product}
                  image={el.image}
                  price={el.price}
                  onSale={el.onSale}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
