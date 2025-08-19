import React from 'react';



const ProductCard = ({ product, onAdd }) => (
  
  <div className="card m-2" style={{ width: '18rem' }}>
    <img src={product.Image} className="card-img-top" alt={product.Name} />
    <div className="card-body">
      <h5 className="card-title">{product.Name}</h5>
      <p className="card-text">{product.Price} €</p>
      <button className="btn btn-primary me-2" onClick={() => onAdd(product._id)}>Ajouter</button>
    </div>
  </div>
);

export default ProductCard;
