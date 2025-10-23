import React, { createContext, useContext, useState, useEffect } from 'react';

// Création du contexte utilisateur
const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: 'Alice', connected: true });

  // Fonction pour changer le statut de connexion
  const toggleConnection = () => {
    setUser((prev) => ({ ...prev, connected: !prev.connected }));
  };

  return (
    <UserContext.Provider value={{ user, toggleConnection }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
