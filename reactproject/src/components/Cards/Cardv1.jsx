import React, { useState, useEffect } from "react";
import Cards from "./Cards"; // adjust if path is different

const Cardv1Component = () => {
  const [products, setProducts] = useState([]);
  const [age, setAge] = useState(18);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products");
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    getProducts();
  }, []);

  const addProduct = () => {
    const product2 = {
      id: Date.now(),
      title: "Product 2",
      price: 340,
      thumbnail: "https://via.placeholder.com/150",
      description: "This is a new added product",
    };
    setProducts([...products, product2]);
  };

  return (
    <main className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="mb-0">Products</h1>
        <button className="btn btn-success" onClick={addProduct}>
          Add 2nd Product
        </button>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-5">
          <h4 className="text-muted">No products available.</h4>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((prod) => (
            <div
              key={prod.id || prod.title}
              className="col d-flex justify-content-center"
            >
              <Cards
                title={prod.title}
                price={prod.price}
                thumbnail={prod.thumbnail}
                description={prod.description}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default Cardv1Component;
