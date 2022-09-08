import React, { useState, useEffect, forwardRef } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HotelIcon from '@mui/icons-material/Hotel';
import moment from 'moment';
import Dialog from '@mui/material/Dialog';
import Slide from '@mui/material/Slide';



// import Blocks
import DateSelectBox from './blocks/date-select-box.js';
import AsyncAutoComplete from './blocks/async-auto-complete.js';
import PassengerDialog from './blocks/passenger-dialog.js';
import SelectBox from './blocks/select-box.js';


const layout = [
  {
    title: 'hotel',
    icon: <HotelIcon />,
  },
  {
    title: 'Flight',
    icon: <HotelIcon />,
  },
  {
    title: 'Car Rental',
    icon: <HotelIcon />,
  },
];

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Reservation() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(prev => !prev);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [date, setDate] = useState([
    {
      startDate: null,
      endDate: null,
      key: 'selection',
    },
  ]);
  
  const [value, setValue] = useState(0);
  useEffect(() => {
    //console.log("useEffect value is " + date.startDate)
    //console.log("useEffect value is " + date.endDate)
  }, [date]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label='basic tabs example'
        >
          <Tab label={layout[0].title} {...a11yProps(0)} />
          <Tab label={layout[1].title} {...a11yProps(1)} />
          <Tab label={layout[2].title} {...a11yProps(2)} />
          <SelectBox />
          <PassengerDialog />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
            <AsyncAutoComplete />
          </Grid>
          

          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <Box>
              <Button
                variant='outlined'
                sx={{ display: 'flex', flexDirection: 'column' }}
                onClick={handleClick}
              >
                <Typography variant='body2'>Check In</Typography>
                <Typography variant='body2'>
                  {date.startDate !== undefined ? (
                    moment(date.startDate).format('MM-DD-YYYY')
                  ) : (
                    <Typography variant='body2'>add date</Typography>
                  )}
                </Typography>
              </Button>
              <Dialog
                fullScreen
                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
              >
                <DateSelectBox
                  date={date}
                  setDate={setDate}
                  open={open}
                  setOpen={setOpen}
                  handleClick={handleClick}
                />
              </Dialog>
            </Box>
          </Grid>
          
          <Grid item xs={6} sm={6} md={3} lg={3} xl={3}>
            <Box>
              <Button
                variant='outlined'
                sx={{ display: 'flex', flexDirection: 'column'}}
                onClick={handleClick}
              >
                <Typography variant='body2'>Check Out</Typography>
                <Typography variant='body2'>
                  {date.startDate !== undefined ? (
                    moment(date.endDate).format('MM-DD-YYYY')
                  ) : (
                    <Typography variant='body2'>add date</Typography>
                  )}
                </Typography>
              </Button>
              <DateSelectBox
                date={date}
                setDate={setDate}
                open={open}
                setOpen={setOpen}
                handleClick={handleClick}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={3} lg={3} xl={3}>
            <Button sx={{}} variant='contained'>Search</Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}

// 컴포넌트 파일에 아래를 추가하세요.
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2);
