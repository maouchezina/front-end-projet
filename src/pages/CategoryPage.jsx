import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../utils/api';
import ProductCard from '../components/ProductCard';




function CategoryPage() {
  const { type } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api.getProducts()
      .then(res => {
        // filtrer selon la catégorie, ici on suppose product.category correspond au paramètre type
        const filtered = res.data.filter(p => p.Category === type || p.Category === undefined);
        setProducts(filtered);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [type]);

  const handleAddToCart = (productId) => {
    api.addToCart({ product: productId, quantity: 1 })
      .then(() => alert('Produit ajouté au panier'))
      .catch(() => alert('Erreur lors de l\'ajout au panier'));
  };

  if (loading) return <p>Chargement...</p>;
  if (products.length === 0) return <p>Aucun produit dans cette catégorie.</p>;

  return (
    <>
      <h2 className="mb-4 text-capitalize">{type.replace('-', ' ')}</h2>
      <div className="d-flex flex-wrap justify-content-start">
        {products.map(product => (
          <ProductCard key={product._id} product={product} onAdd={handleAddToCart} />
        ))}
      </div>
    </>
  );
}

export default CategoryPage;
