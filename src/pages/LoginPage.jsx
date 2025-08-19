import React, { useState } from 'react';
import { api } from '../utils/api';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.login({ email, Password: password });
      const role = res.data.user.Role;
      localStorage.setItem('token', res.data.token);

      localStorage.setItem('user', JSON.stringify(res.data.user));
      console.log(res.data)
      alert('Connexion réussie');
      // if admin
      // Redirection en fonction du rôle
      
      if (role === 'admin') {
        navigate('/admin'); // redirige vers la page admin
      } else {
        navigate('/user'); // redirige vers la page client
      }
      //
   //navigate('/');
    } catch (error) {
      alert('Erreur de connexion');
            console.error(error);
    }
  };

  return (
    <div className="mx-auto" style={{ maxWidth: 400 }}>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            required
            value={email}
            onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label>Mot de passe</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={e => setPassword(e.target.value)} />
        </div>
        <button className="btn btn-primary" type="submit">Se connecter</button>
      </form>
      <p className="mt-3">
        Pas encore inscrit ? <Link to="/register">Créer un compte</Link>
      </p>
    </div>
  );
};

export default LoginPage;
