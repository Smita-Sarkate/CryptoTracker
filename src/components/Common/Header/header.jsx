import React from 'react';
import AnchorTemporaryDrawer from './drawer.jsx'
// import { Button } from '../Button.jsx';
import './style.css'
// import { Dashboard } from '@mui/icons-material';

function Header() {
  return (
    <div className="px-4 py-4 flex items-center justify-between">
      <div className="logo">
        <h1>
          CryptoTracker<span style={{ color: 'var(--blue)' }}>.</span>
        </h1>
      </div>

      <div className="hidden md:flex md:gap-6 md:opacity-50">
        <a href="/">
          <p>Home</p>
        </a>
        <a href="/">
          <p>Compare</p>
        </a>
        <a href="/">
          <p>Watchlist</p>
        </a>
        <a className="px-2 rounded-full" href="/">
          <p style={{ backgroundColor: 'var(--blue)' }}>Dashboard</p>
          {/* <Button text={"Dashboard"}/> */}
        </a>
      </div>

      <div className="md:hidden">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
