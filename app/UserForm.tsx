import React, { useState } from 'react';

interface UserFormProps {
  onSubmit: (formData: { prenom: string; nom: string; mail: string; telephone: string }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    mail: '',
    telephone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prenom">Prénom:</label>
      <input type="text" id="prenom" name="prenom" required onChange={handleChange}></input>

      <label htmlFor="nom">Nom:</label>
      <input type="text" id="nom" name="nom" required onChange={handleChange}></input>

      <label htmlFor="mail">E-mail:</label>
      <input type="email" id="mail" name="mail" required onChange={handleChange}></input>

      <label htmlFor="telephone">Numéro de téléphone:</label>
      <input type="tel" id="telephone" name="telephone" required onChange={handleChange}></input>

      <input type="submit" value="Soumettre"></input>
    </form>
  );
};

export default UserForm;