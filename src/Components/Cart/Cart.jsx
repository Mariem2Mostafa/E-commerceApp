

import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
  }, []);

  const removeItem = (index) => {
    const newCart = cartItems.filter((item, i) => i !== index);
    setCartItems(newCart);
    localStorage.setItem('cart', JSON.stringify(newCart));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center display-4">Your Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="px-4 my-5 bg-light rounded-3 py-5 text-center">
          <div className="container py-4">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <div className="mb-4">
                  <i className="bi bi-cart-x display-1 text-muted"></i>
                </div>
                <h3 className="mb-3">Your Cart is Empty</h3>
                <NavLink to="/" className="btn btn-primary btn-lg mt-3">
                  Continue Shopping
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="row row-cols-3 g-4 mb-4">
            {cartItems.map((item, index) => (
              <div className="col" key={index}>
                <div className="card text-center py-2">
                  <div className="row g-0 h-100">
                    <div className="col-md-4">
                      <img
                        src={item.images?.[0]}
                        alt={item.title}
                        className=" w-100 m-2 "
                      />
                    </div>
                    <div className="col-md-8 d-flex flex-column py-4">
                      <h3 className="mb-3">{item.title}</h3>
                      <p className="lead fw-bold mb-4">${item.price}</p>
                      <div className="mt-auto">
                        <button 
                          className="btn btn-outline-danger"
                          onClick={() => removeItem(index)}
                        >
                          <i className="bi bi-trash me-2"></i>
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
                <div>
              <h3 className="card-title display-6 mb-4">
                Total: <span className="text-primary">${total.toFixed(2)}</span>
              </h3>
              <div className="d-flex gap-3 justify-content-end">
                <NavLink to="/" className="btn btn-outline-secondary btn-lg">
                  Continue Shopping
                </NavLink>
                <button className="btn btn-primary btn-lg">
                  Checkout
                </button>
              </div>
            </div>
        </>
      )}
    </div>
  );
};

export default Cart;