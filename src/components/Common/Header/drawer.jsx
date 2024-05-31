import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import {IconButton} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { Link } from 'react-router-dom';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className={`text-white`}/></IconButton>
          <Drawer PaperProps={{sx: {height:'auto', top: "5px"}}} anchor={"right"} open={open} onClose={()=> setOpen(false)}>
            <div style={{
              backgroundColor: 'slate',
              height:'50%'
              }} 
              className='flex w-full bg-red text-red'>
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/compare">
                <p>Compare</p>
              </Link>
              <Link to="/watchlist">
                <p>Watchlist</p>
              </Link>
              <Link className="px-2 rounded-full" href="/">
                <p style={{ backgroundColor: 'var(--black)' }}>Dashboard</p>
              </Link>
            </div>
          </Drawer>
    </div>
  );
}