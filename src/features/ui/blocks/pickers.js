import React, { useEffect } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import moment from 'moment';

const Pickers = ({ date, handleClick, handleDateChange }) => {

  useEffect(() => {
    
  }, [date]);

  return (
    <Container maxWidth='sm'>
      <Box>
        <DateRange
          ranges={[date]}
          onChange={handleDateChange}
          moveRangeOnFirstSelection={false}
          months={1}
          direction='horizontal'
          color='#808080'
        />
        <div>{moment(date.startDate).format('DD-MM-YYYY')}</div>
        <div>{moment(date.endDate).format('DD-MM-YYYY')}</div>
      </Box>
      <Button onClick={handleClick} variant='text'>
        cancel
      </Button>
      <Button onClick={handleClick} variant='text'>
        Ok
      </Button>
    </Container>
  );
};

export default Pickers;
