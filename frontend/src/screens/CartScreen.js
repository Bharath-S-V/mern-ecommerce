import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { useParams, useLocation } from 'react-router-dom'; // Import useParams and useLocation

export default function CartScreen() {
  const { id } = useParams(); // Destructure 'id' from the result of useParams
  const searchParams = new URLSearchParams(useLocation().search);
  const qty = Number(searchParams.get('qty') || 1);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty)); // Use 'id' to access the product ID
    }
  }, [dispatch, id, qty]);

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {id} Qty: {qty}
      </p>
    </div>
  );
}
