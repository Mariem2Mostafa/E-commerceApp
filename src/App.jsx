import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route , Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Store from './Components/Store/Store';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ProductDetail from './Components/ProductDetils/ProductDetail';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/store/product/:id"
          element={<ProductDetail/>}
        />
        <Route
          path="/Store"
          element={<Store/>}
        />
        <Route
          path="/Cart"
          element={<Cart/>}
        />


      </Routes>
        <Footer/>
      </Router>

      
    </>
  );
}

export default App;
