import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from "./pages/Success";
import AuthError from "./pages/AuthError";
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

const App = () => {
  const user = false;
  
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:category" element={<ProductList/>} />
        <Route path="/singleproduct/:id" element={<Product/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/success" element={<Success /> } />
        <Route path="/error" element={<AuthError />}/>
        <Route path="/login" element={ user ? <Home /> : <Login />} />
        <Route path="/register" element={ user ? <Home /> : <Register/>} />
      </Routes>
    </Router> 
    </div>     
  )
};

export default App;