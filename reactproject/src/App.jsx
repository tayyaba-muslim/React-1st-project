// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// // import Home from './components/Home'
// import Footer from './components/Footer/Footer'
// import Navbar from './components/navbar/Navbar'
// import Todo from './components/Todo/Todo'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//     <Navbar/>
//      <Todo/>
//      <Footer/>
//     </>
    
//   )
// }

// export default App
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Todo from './components/Todo/Todo';
import Home from './components/Home/Home';
import Cards from './components/Cards/Cards';

function App() {
  const [products, setProducts] = useState([]);
  const [age, setAge] = useState(18);

  const getProducts = async () => {
    try {
      const res = await fetch('https://dummyjson.com/products');
      const data = await res.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts();
  }, [age]);

  const addProduct = () => {
    const product2 = {
      title: "Product 2",
      price: 340,
      thumbnail: "https://via.placeholder.com/150",
      description: "This is a new added product"
    };
    setProducts([...products, product2]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>

      <main className="container my-5">
        <h1 className="mb-4">Products</h1>
        <button className="btn btn-success mb-4" onClick={addProduct}>Add 2nd Product</button>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {products.map((prod, index) => (
            <CardComponent
              key={index}
              title={prod.title}
              price={prod.price}
              thumbnail={prod.thumbnail}
              description={prod.description}
            />
          ))}
        </div>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
