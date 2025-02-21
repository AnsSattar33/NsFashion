import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages";
import HomePageLayout from "./pages/Home/Layout";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePageLayout />}>
        <Route index element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Route>
    </Routes>
  );
}

export default App;
