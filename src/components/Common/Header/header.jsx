
import AnchorTemporaryDrawer from './drawer.jsx'
import Button from '../Button/Button.jsx'

function Header() {
  return (
    <div className="px-6 py-4 flex items-center justify-between">
      <div className="logo">
        <h1 className='text-xl'>
          CryptoTracker<span style={{ color: 'var(--blue)' }}>.</span>
        </h1>
      </div>

      <div className="hidden md:flex md:gap-6 flex items-center">
        <a href="/">
          <p>Home</p>
        </a>
        <a href="/">
          <p>Compare</p>
        </a>
        <a href="/">
          <p>Watchlist</p>
        </a>
        <a href="/">
          <Button text={"Dashboard"}/>
        </a>
      </div>

      <div className="md:hidden">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
}

export default Header;
