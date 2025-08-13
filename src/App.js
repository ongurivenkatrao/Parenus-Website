
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import ProductDetails from "./pages/ProductDetails"; // ✅ Added
import Cart from "./pages/Cart"; // ✅ Add import
import Login from "./pages/Login";
import Payment from "./pages/Payment";
function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/product/:id" element={<ProductDetails />} /> 
        <Route path="/cart" element={<Cart />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
}

export default App;


