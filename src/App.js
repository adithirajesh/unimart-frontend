import { BrowserRouter, Routes, Route } from "react-router-dom";
import Browse from "./pages/Browse";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Landing from "./pages/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/browse" element={<Browse />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path= "/landing" element = {<Landing/>}></Route>
        <Route path= "/" element = {<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
