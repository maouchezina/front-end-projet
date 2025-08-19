import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.getOrders()
      .then(res => setOrders(res.data))
      .catch(() => alert('Erreur chargement commandes'))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Chargement des commandes...</p>;

  if (orders.length === 0) return <p>Vous n'avez pas encore passé de commandes.</p>;

  return (
    <>
      <h2>Mes commandes</h2>
      {orders.map(order => (
        <div key={order._id} className="card mb-3">
          <div className="card-header">
            Commande #{order._id} - Statut: <strong>{order.status}</strong> - Total: {order.total} €
            <br />
            Passée le : {new Date(order.createdAt).toLocaleDateString()}
          </div>
          <ul className="list-group list-group-flush">
            {order.products.map(({ product, quantity }) => (
              <li key={product._id} className="list-group-item">
                {product.Name} x {quantity} - {product.Price} € chacun
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default OrdersPage;
