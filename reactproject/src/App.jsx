// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Todo from "./components/Todo/Todo";
import Home from "./components/Home/Home";
import { Routes, Route, Form } from "react-router";
import Cardv1Component from "./components/Cards/Cardv1";
import NotFound from "./components/NotFound/notFound";
import AboutUs from "./components/About/about";
import ContactUs from "./components/Contact/contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/cards" element={<Cardv1Component />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />

          {/* Route groups /prefix (for admin)*/}
          <Route path ="/products">
          <Route path="/products/details" element={<Cardv1Component />} />
          <Route path="/products/create" element={<Form/>} />

          </Route>
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
