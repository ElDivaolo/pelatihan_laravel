import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./pages/Auth/login"
import Register from "./pages/Auth/register";
import Products from "./pages/Products/Index";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />

        <Route path="/products" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}