import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Product } from "./pages/Product";
import { Inventory } from "./pages/Inventory";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inventory</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
