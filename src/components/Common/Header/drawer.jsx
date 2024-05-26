import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import {IconButton} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  // const drawerContent = ()
  return (
    <div>
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon className={`text-white`}/></IconButton>
          <Drawer PaperProps={{sx: {height:'auto', top: "5px"}}} anchor={"right"} open={open} onClose={()=> setOpen(false)}>
            <div style={{
              backgroundColor: 'slate',
              height:'50%'
              }} 
              className='flex w-full bg-red text-red'>
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
                <p style={{ backgroundColor: 'var(--black)' }}>Dashboard</p>
              </a>
            </div>
          </Drawer>
    </div>
  );
}