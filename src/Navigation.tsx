import React from 'react';
import './Navigation.css'; // Import the plain CSS file

interface NavigationProps {
  isLoggedIn: boolean;
  onLogout?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isLoggedIn, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="navContainer">
        <a href="/" className="logo">
          MyApp
        </a>
        <ul className="navList">
          {!isLoggedIn ? (
            <>
              <li className="navItem">
                <a href="https://auth.example.com/login">Login</a>
              </li>
              <li className="navItem">
                <a href="https://auth.example.com/signup">Sign Up</a>
              </li>
            </>
          ) : (
            <>
              <li className="navItem">
                <a href="/dashboard">Dashboard</a>
              </li>
              <li className="navItem">
                <button className="logoutButton" onClick={onLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
