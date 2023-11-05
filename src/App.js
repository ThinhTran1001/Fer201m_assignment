import { Container } from "react-bootstrap";
import {
  Cart,
  Footer,
  Header,
  Home,
  Login,
  ManageProduct,
  ManageUser,
  ProductDetail,
  Register,
} from "./components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <Container fluid>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/product/detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/manageuser" element={<ManageUser />} />
          <Route path="/manageproduct" element={<ManageProduct />} />
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
}

export default App;
