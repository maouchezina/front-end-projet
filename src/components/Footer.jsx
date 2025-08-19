import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-light py-3 mt-4">
    <div className="container text-center">
      <Link className="me-3" to="/category/fille">Fille</Link>
      <Link className="me-3" to="/category/fille-bebe">Fille-bébé</Link>
      <Link className="me-3" to="/category/garcon">Garçon</Link>
      <Link to="/category/garcon-bebe">Garçon-bébé</Link>
    </div>
  </footer>
);

export default Footer;
