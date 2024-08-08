import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  function handleMenuClick() {
    setIsDisplayed((prevIsDisplayed) => !prevIsDisplayed);
  }

  let dropdownMenuClasses = 'custom-dropdown-menu';
  if (isDisplayed) {
    dropdownMenuClasses += ' display-mobile-menu';
  }

  return (
    <header className="Header">
      <nav className="nav bg-primary w-100">
        <Container className="d-flex justify-content-between align-items-center">
          <Link to="/" className="p-3">
            <img
              src="https://w7.pngwing.com/pngs/878/81/png-transparent-car-vehicle-leasing-lease-computer-icons-car-text-photography-logo.png"
              alt="logo"
            />
          </Link>

          <div className="menu-icon-container">
            <span
              onClick={handleMenuClick}
              className="material-icons menu-icon"
            >
              {isDisplayed ? 'close' : 'menu'}
            </span>

            <ul className={dropdownMenuClasses}>
              <li className={isDisplayed ? 'container' : null}>
                <Link to="/" className="p-3 text-uppercase text-light">
                  Home
                </Link>
              </li>
              <li className={isDisplayed ? 'container' : null}>
                <Link to="/carlist" className="p-3 text-uppercase text-light">
                  Lista mașini
                </Link>
              </li>

              <li className={isDisplayed ? 'container' : null}>
                <Link to="/favs" className="p-3 text-uppercase text-light">
                  Favorite
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    </header>
  );
}
