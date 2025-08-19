import React, { useState } from 'react';
import { api } from '../../utils/api';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [imageFile, setImageFile] = useState(null);
   const [category, setCategory] = useState('');
  const navigate = useNavigate();
  const ca=["fille","fille-bébé","garçon","garçon-bébé"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) {
      alert('Veuillez choisir une image');
      return;
    }

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Price', price);
    formData.append('Quantity', quantity);
    formData.append('Category', category);

    formData.append('file', imageFile);
    //formData.append('image', imageFile);

    try {
      await api.createProduct(formData);
      alert('Produit ajouté avec succès');
      navigate('/');
    } catch (err) {
      console.error(err); // Ajoute ceci pour voir l'erreur exacte dans la console
      alert('Erreur lors de la création du produit');
    }
  };

  return (
    <div className="mx-auto" style={{ maxWidth: 500 }}>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label>Nom du produit</label>
          <input
            type="text"
            className="form-control"
            required
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Category</label>
    
          
            <select className="form-control"  onChange={(e)=>setCategory(e.target.value)}>{ca.map((el)=><option>{el}</option>)}</select>
        </div>
        <div className="mb-3">
          <label>Prix (€)</label>
          <input
            type="number"
            step="0.01"
            className="form-control"
            required
            value={price}
            onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Quantité</label>
          <input
            type="number"
            className="form-control"
            required
            value={quantity}
            onChange={e => setQuantity(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Image</label>
          <input
            type="file"
      
            className="form-control"
            accept="image/*"
            onChange={e => setImageFile(e.target.files[0])} />
        </div>
        <button className="btn btn-primary" type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ProductForm;
