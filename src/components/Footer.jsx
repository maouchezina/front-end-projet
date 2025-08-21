import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-light py-3 mt-4">
    <div className="container text-center">
      <Link className="me-3" to="/category/fille">Fille</Link>
      <Link className="me-3" to="/category/fille-bébé">Fille-bébé</Link>
      <Link className="me-3" to="/category/garçon">Garçon</Link>
      <Link to="/category/garçon-bébé">Garçon-bébé</Link>
    </div>
  </footer>
);

export default Footer;
