
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; // أضف useNavigate
import { NavLink } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
   const [cartBtn, setCartBtn] = useState("Add to Cart");
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);
 const addToCart = () => {
    
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    setCartBtn("Added to Cart!");
  };

  
   const Loading = () => {
    return (
      <>
       <h1>Loading...</h1>
      </>
    );
  };
 

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6 mb-4">
          <img
            src={product.images?.[0]}
            alt={product.title}
            height="400px"
            width="400px"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-uppercase text-black-50">{product.category.name}</h4>
          <h1 className="display-5">{product.title}</h1>
        
          <h3 className="display-6 fw-bold my-4">$ {product.price}</h3>
          <p className="lead">{product.description}</p>
          <button
            className="btn btn-outline-dark px-4 py-2"
            onClick={() => addToCart(product)} // Pass product explicitly
          >
            {cartBtn}
          </button>
          <NavLink to="/Cart" className=" btn btn-outline-dark px-3 py-2 ms-2">
            Go to Cart
          </NavLink>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="container py-3">
        <div className="row py-3 justify-content-center">
          {loading ? <Loading /> : <ShowProduct />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;