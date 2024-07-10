import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} from "../features/cartSlice";
import { useGetAllProductsQuery } from '../features/productsApi';
import { ChevronDown, ChevronUp } from './Icons';

const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };

  const handleClearCart = () => {
    const confirmClear = window.confirm("정말로 장바구니를 비우시겠습니까?");
    if (confirmClear) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred...</p>
      ) : (
        <>
          <h2>당신이 선택한 음반</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <img src={product.img} alt={product.title} />
                <div className="sub">
                  <div className="title">{product.title} | {product.singer}</div>
                  <div className="price">\{product.price}</div>
                </div>
                <div className="details">
                  <div className="Chevron">
                    <button className="ChevronUp" onClick={() => handleAddToCart(product)}><ChevronUp/></button>
                    <div className="cart-items">
                      {cart.cartItems.map((cartItem) => (
                        cartItem.id === product.id && (
                          <div key={cartItem.id} className="count">
                            {cartItem.cartQuantity}
                          </div>
                        )
                      ))}
                      <button className="ChevronDown" onClick={() => handleDecreaseCart(product)}><ChevronDown/></button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="divider"></div>
          <div className="cart-summary">
            <div className="cartTotalAmount">
              총가격 
              <span> {cart.cartTotalAmount}</span>
            </div>
            <div className="ClearCart1">
              <button className="ClearCart" onClick={handleClearCart}>Clear Cart</button>
            </div>
          </div>
        </>
      )}
      <div className="cart-container">
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>장바구니가 비었습니다</p>
          </div>
        ) : (
          <div>
            <div className="cart-items">
              {cart.cartItems.map((cartItem) => (
                <div className="cart-item" key={cartItem.id}>
                  <div className="cart-product">
                    <img src={cartItem.image} alt={cartItem.name} />
                    <div>
                      <h3>{cartItem.name}</h3>
                      <p>{cartItem.description}</p>
                      <button onClick={() => handleDecreaseCart(cartItem)}>-</button>
                      <span>{cartItem.cartQuantity}</span>
                      <button onClick={() => handleAddToCart(cartItem)}>+</button>
                      <button onClick={() => dispatch(removeFromCart(cartItem))}>Remove</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;



/*import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
 
} from "../features/cartSlice";
//import { Link } from "react-router-dom";
import { useGetAllProductsQuery } from '../features/productsApi';
import { ChevronDown, ChevronUp } from './Icons';


const Home = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  const handleDecreaseCart = (product) => {
    dispatch(decreaseCart(product));
  };


  const handleClearCart = () => {
    const confirmClear = window.confirm("정말로 장바구니를 비우시겠습니까?");
    if (confirmClear) {
      dispatch(clearCart());
    }
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred...</p>
      ) : (
        <>
          <h2>당신이 선택한 음반</h2>
          <div className="products">
            
            {data?.map((product) => (
              
              <div key={product.id} className="product">
               
                <img src={product.img} alt={product.title} />
                <div className="sub">
                  <div className="title">{product.title} | {product.singer}</div>
                  <div className="price">\{product.price}</div>
                </div>
                
                <div className="details">
                  
                   <div className="Chevron">
                    <button className="ChevronUp" onClick={() => handleAddToCart(product)}><ChevronUp/></button>
                    <div className="cart-items">
            {cart.cartItems &&
              cart.cartItems.map((cartItem) => (
                    <div className="count">{cartItem.cartQuantity}</div>)
                    <button className="ChevronDown" onClick={() => handleDecreaseCart(product)}><ChevronDown/></button>
                   </div>
                
                </div>
                
              </div>
              
            ))}
          </div>
          <div className="divider"></div>

          <div className="cart-summary">
            <div className="cartTotalAmount">
              총가격 
             <span> {cart.cartTotalAmount}</span>
            </div>
            <div className="ClearCart1">
              <button className="ClearCart" onClick={handleClearCart}>Clear Cart</button>
            </div>
          </div>
        </>
      )}




      <div className="cart-container">
        
        {cart.cartItems.length === 0 ? (
          <div className="cart-empty">
            </div>
         
        ) : (
         
          <div>
            <div className="cart-items">
              {cart.cartItems &&
                cart.cartItems.map((cartItem) => (
                  <div className="cart-item" key={cartItem.id}>
                    <div className="cart-product">
                      <img src={cartItem.image} alt={cartItem.name} />
                      <div>
                        <h3>{cartItem.name}</h3>
                        <p>{cartItem.description}</p>
                     
                       
                       
                      </div>
                    </div>
                  </div>
                ))}
            </div>

        
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
*/

/* 멀쩡
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";
import { ChevronDown, ChevronUp } from './Icons'; // 올바른 경로로 수정
import { addToCart, removeFromCart } from '../features/cartSlice'; 

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();

  // 디버깅을 위해 데이터와 에러 출력
  console.log("Api isLoading:", isLoading);
  console.log("Api data:", data);
  console.log("Api error:", error);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Unexpected error occurred...</p>
      ) : (
        <>
          <h2>당신이 선택한 음반</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.img} alt={product.title} />
                <div className="details">
                  <span>{product.amount}</span>
                  <span className="price">${product.price}</span>
                  <button onClick={() => handleAddToCart(product)}>
                    <ChevronUp /> 
                  </button>
                  <button onClick={() => handleRemoveFromCart(product.id)}>
                    <ChevronDown />
                  </button>  
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
*/


/* 최근
import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useGetAllProductsQuery } from "../features/productsApi";
import { ChevronDown, ChevronUp } from './Icons'; // 올바른 경로로 수정
import { addToCart, removeFromCart } from '../features/cartSlice'; 


const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data, error, isLoading } = useGetAllProductsQuery();

  // 디버깅을 위해 데이터와 에러 출력
  console.log("Api isLoading:", isLoading);
  console.log("Api data:", data);
  console.log("Api error:", error);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
  };
  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
};


  return (
    <div className="home-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Unexpected error occurred...</p>
      ) : (
        <>
          <h2>당신이 선택한 음반</h2>
          <div className="products">
            {data?.map((product) => (
              <div key={product.id} className="product">
                <h3>{product.title}</h3>
                <img src={product.img} alt={product.title} />
                <div className="details">
                  <span>{product.amount}</span>
                  <span className="price">${product.price}</span>
                  <button  onClick={() => handleAddToCart(product)} ><ChevronUp/> </button>
                  <button  onClick={() => handleRemoveFromCart(product.id)}><ChevronDown/></button>  
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

*/


/*
 import React from 'react';
import { useGetAllProductsQuery } from '../features/productsApi';
import { ChevronDown, ChevronUp } from './Icons'; // 올바른 경로로 수정
import { useDispatch } from 'react-redux'; // useDispatch 임포트
import { addToCart, removeFromCart } from '../features/cartSlice'; // 액션 임포트

const Home = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch(); // useDispatch 훅 사용

    if (error) {
        console.error('Error fetching products:', error);
    }

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <div className="home-container">
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>An error occurred...</p>
            ) : (
                <>
                    <h2>당신이 선택한 음반</h2>
                    <div className="products">
                        {data?.map((product) => (
                            <div key={product.id} className="product">
                                <h3>{product.title} | {product.singer}</h3>
                                <img src={product.img} alt={product.title} />
                                <div className="details">
                                    <span className="amount">{product.amount}</span>
                                    <span className="price">\{product.price}</span>
                                    <button  onClick={() => handleAddToCart(product)} ><ChevronUp/> </button>
                                    <button  onClick={() => handleRemoveFromCart(product.id)}></button>  
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Home;
*/