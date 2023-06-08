import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Cart } from "./pages/Cart";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { User } from "./pages/User";

function App() {
  return (
    // code text 0001, contoh cara pembuatan basic route
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* code text 0002, contoh cara pembuatan basic route with param, dicontoh ini terdapat param dengan name id */}
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
