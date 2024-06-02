import React, { useState } from 'react'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

function Search({search, onSearchChange}) {
  

  return (
    <div className='flex container mx-auto items-center w-[70rem] h-[2.75rem] bg-darkgray pl-6 rounded-full text-gray gap-3 mt-3 mb-4'>
        <SearchRoundedIcon/>
      <input className='bg-darkgray w-80 h-full outline-none p-2' type="text"  placeholder='Search' value={search} onChange={(e)=> onSearchChange(e)} />
       
    </div>
  )
}

export default Search
