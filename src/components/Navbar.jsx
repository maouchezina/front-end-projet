import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../utils/api.js'
//import { api } from '/Users/hobby/Desktop/frontendprojet/utils/api.js'

const Navbar = () => {
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('token')) {
      //api.getCurrent().then(res => setUser(res.data)).catch(() => setUser(null));
      api.getCurrent().then(res => setUser(res.data)).catch(() => setUser(null));
    }
  }, []);

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    nav('/');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">Ma Boutique</Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item"><Link className="nav-link" to="/cart">Panier</Link></li>
          <li className="nav-item"><Link className="nav-link" to="/orders">Commandes</Link></li>
          {user?.Role === 'admin' ?<li className="nav-item"><Link className="nav-link" to="/admin/create">Créer produit</Link></li>:null}
        </ul>
        <ul className="navbar-nav">
          {user ? (
            <>
              <li className="nav-item nav-link">Salut, {user.Name}</li>
              <li className="nav-item"><button className="btn btn-link nav-link" onClick={logout}>Déconnexion</button></li>
            </>
          ) : (
            <>
              <li className="nav-item"><Link className="nav-link" to="/login">Connexion</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Inscription</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
