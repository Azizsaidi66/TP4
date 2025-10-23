import React, { useState, createContext, useContext } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Time from './Components/Time.jsx';
import UserList from './Components/UserList.jsx';
import { UserProvider } from './Context/UserContext.jsx';
import UserProfile from './Context/UserProfile.jsx';
import Notifications from './Context/Notifications.jsx';
import NotificationCounter from './Context/NotificationsCounter.jsx';

// Création du contexte
const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <p>Thème actuel : {theme}</p>
      <button onClick={toggleTheme}>Changer le thème</button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <UserProvider>
        <div style={{ fontFamily: 'Arial', padding: 20 }}>
          <Time />
          <ThemeToggle />
          <h1>TP - Appel API avec useEffect</h1>
          <UserList />
          <h1>Mon Application React</h1>
          <UserProfile />
          <Notifications />
          <NotificationCounter />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
