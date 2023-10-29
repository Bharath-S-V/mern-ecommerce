import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

export default function CartScreen() {
  const { id } = useParams(); // Use useParams to access route parameters
  const searchParams = new URLSearchParams(useLocation().search);
  const qty = Number(searchParams.get('qty'));

  return (
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : ProductID: {id} Qty: {qty}
      </p>
    </div>
  );
}
