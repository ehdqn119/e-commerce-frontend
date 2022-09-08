import React from 'react';
import Box from '@mui/material/Box';
import Pickers from './pickers';


export default function DateSelectBox({date,setDate,isFirst, handleClick, open, setOpen}) {
  
  

  const handleDateChange = changes => {
    console.log(changes.range1);
    setDate(changes.range1);
    //console.log("startDate is " + date.startDate);
    //console.log("endDate is " + date.endDate);
  };

  return (
    <>
      

      {open ? (
        <Box sx={{ position: 'relative' }}>
          <Pickers
            date={date}
            handleDateChange={handleDateChange}
            handleClick={handleClick}
          />
        </Box>
      ) : null}
    </>
  );
}


// <Typography variant="body2" >{moment(date.endDate).format('MM-DD-YYYY')}</Typography>

// in Button Logic
 