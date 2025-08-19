import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

const CartPage = () => {
  const [cart, setCart] = useState({ items: [] });
  const [loading, setLoading] = useState(true);

  const fetchCart = () => {
    setLoading(true);
    api.getCart()
      .then(res => setCart(res.data))
      .catch(() => alert('Erreur chargement panier'))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPrice = cart.items.reduce(
    (sum, item) => sum + (item.product.Price * item.quantity),
    0
  );

  const handlePlaceOrder = () => {
    api.placeOrder()
      .then(() => {
        alert('Commande passée avec succès');
        fetchCart();
      })
      .catch(() => alert('Erreur lors de la commande'));
  };

  if (loading) return <p>Chargement du panier...</p>;

  if (cart.items.length === 0) return <p>Votre panier est vide.</p>;

  return (
    <>
      <h2>Votre panier</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Produit</th>
            <th>Quantité</th>
            <th>Prix unitaire</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map(({ product, quantity }) => (
            <tr key={product._id}>
              <td>{product.Name}</td>
              <td>{quantity}</td>
              <td>{product.Price} €</td>
              <td>{(product.Price * quantity).toFixed(2)} €</td>
            </tr>
          ))}
          <tr>
            <td colSpan="3" className="text-end fw-bold">Total</td>
            <td className="fw-bold">{totalPrice.toFixed(2)} €</td>
          </tr>
        </tbody>
      </table>
      <button className="btn btn-success" onClick={handlePlaceOrder}>Passer la commande</button>
    </>
  );
};

export default CartPage;
