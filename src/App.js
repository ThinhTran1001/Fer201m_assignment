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
  Phone,
  Laptop,
} from "./components";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import { useEffect, useState } from "react";
import OrderTracking from "./components/OrderTracking";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLogin(true);
    }
    console.log("Reload");
  }, []);

  function Layout() {
    return (
      <>
        <Header isLogin={isLogin} setIsLogin={setIsLogin} />
        <Outlet />
        <Footer />
      </>
    );
  }
  return (
    <Container fluid>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="/product/detail/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/manageuser" element={<ManageUser />} />
            <Route path="/manageproduct" element={<ManageProduct />} />
            <Route path="/dien-thoai" element={<Phone />} />
            <Route path="/laptop" element={<Laptop />} />
            <Route path="/order-tracking" element={<OrderTracking />} />
          </Route>
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
