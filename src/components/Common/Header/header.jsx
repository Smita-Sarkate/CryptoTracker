
import AnchorTemporaryDrawer from './drawer.jsx'
import Button from '../Button/Button.jsx'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="px-6 py-4 flex items-center justify-between">
      <div className="logo">
        <h1 className='text-xl'>
          CryptoTracker<span style={{ color: 'var(--blue)' }}>.</span>
        </h1>
      </div>

      <div className="hidden md:flex md:gap-6 flex items-center">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/compare">
          <p>Compare</p>
        </Link>
        <Link to="/watchlist">
          <p>Watchlist</p>
        </Link>
        <Link to="/dashboard">
          <Button text={"Dashboard"}/>
        </Link>
      </div>

      <div className="md:hidden">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
