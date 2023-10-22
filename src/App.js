import { Container } from "react-bootstrap";
import {Cart, Footer, Header, Home, Login, ManageProduct, ManageUser, ProductDetail, Register} from "./components";
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container>
      <Header />
      <Router>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/register"}>Register</Link>
          </li>
          <li>
            <Link to={"/cart"}>Cart</Link>
          </li>
          <li>
            <Link to={"/manageuser"}>Manage User</Link>
          </li>
          <li>
            <Link to={"/manageproduct"}>Manage Product</Link>
          </li>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/product/detail" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/manageuser" element={<ManageUser />} />
            <Route path="/manageproduct" element={<ManageProduct />} />
          </Routes>
        </ul>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
