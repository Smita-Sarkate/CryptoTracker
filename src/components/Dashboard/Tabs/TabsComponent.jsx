import React, {useState} from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Grid from "../Grid/Grid.jsx"
import {ThemeProvider, createTheme } from '@mui/material';

export default function TabsComponent({coins}) {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

//   for Grid n list default Color Change
const style = {
    color: "white",
}

// this code used for changing color which is apply on grid n list
const theme = createTheme({
    palette:{
        primary: {
            main: "#3A80E9",
        }
    }
});

  return (
    <div>
      <ThemeProvider theme={theme}>
      <TabContext value={value}> 
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="grid" sx={style}/>
            <Tab label="List" value="list" sx={style}/>
          </TabList>
            <TabPanel value="grid">
              <div className='flex justify-center items-center flex-wrap gap-9 m-2'>
                {coins.map((coin, i)=>{
                  return <Grid coin={coin} key={i}/>
                })}
              </div>
            </TabPanel>
            <TabPanel value="list">
              <div>
              {coins.map((item, i)=>{
                  return(
                    <p key={i}>
                      {i+1 +" "}
                      {item.id}
                    </p>
                  );
                })}
              </div>
            </TabPanel>
        </TabContext> 
      </ThemeProvider>
    </div>
  );
}
