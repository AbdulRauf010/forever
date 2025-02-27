import About from "./pages/About";
import Cart from "./pages/Cart";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Orders from "./pages/Orders";
import PageNotFound from "./pages/PageNotFound";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">

    <Navbar/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/collections" element={<Collection/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/product/:productId" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/place-order" element={<PlaceOrder/>} />
        <Route path ="/order" element={<Orders/>} />
        <Route path="*" element={<PageNotFound/>} />  
      </Routes>
    </div>
  )
}

export default App
