import React from 'react';
import accueil from '../assets/accueil.jpg'; // mets une image dans src/assets


const HomePage = () => {
  return (
    <div>
      <div className="mb-4">
        <img
          src={accueil}
          alt="Arrière-plan boutique"
          className="img-fluid w-100"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
        />
      </div>
      <h1 className="text-center">Bienvenue dans notre boutique de vêtements !</h1>
      <p className="text-center mt-3">
        Découvrez nos collections pour filles, garçons et bébés.
      </p>
    </div>
  );
};

export default HomePage;
