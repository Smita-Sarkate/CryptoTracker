import {React, useState} from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({page, totalPages, handlePageChange}) {
  
  return (
    <div className='flex justify-center'>
      <Pagination count={totalPages} page={page? page : 1} onChange={handlePageChange} 
        sx={{color: "var(--white)",
        "& .Mui-selected":{
            backgroundColor: "var(--blue) !important",
            color: "#fff !important",
            borderColor: "var(--blue) !important",
        },
        "& .MuiPaginationItem-ellipsis":{
            border: "0px solid var(--grey) !important",
        },
        "& .MuiPaginationItem-text":{
        color: "var(--white)",
        border: "1px solid var(--grey)",
        }}
      }/>
    </div>
  );
}
