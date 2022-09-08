import React , { useState }from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const optionData = [
  {
    name : '1',
    value : 1
  },
  {
    name : '2',
    value : 2
  },
  {
    name : '3',
    value : 3
  },
  {
    name : '4',
    value : 4
  },
  
  {
    name : '5',
    value : 5
  },
]

export default function PassengerDialog() {
  const [open, setOpen] = useState(false);
  const [passenger, setPassenger] = useState(0);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(1);
  const [infants, setInfants] = useState(1);

  const handleChange = (event) => {
    setAdult(Number(event.target.value));
  };

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button onClick={handleClickOpen}> Passenger</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Passengers</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">Adult</InputLabel>
              <Select
                native
                value={adult}
                onChange={handleChange}
                input={<OutlinedInput label="Adult" id="demo-dialog-native" />}
              >
                {optionData.map((item) => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </Select>
              <InputLabel htmlFor="demo-dialog-native">Children</InputLabel>
              <Select
                native
                value={children}
                onChange={handleChange}
                input={<OutlinedInput label="Children" id="demo-dialog-native" />}
              >
                {optionData.map((item) => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </Select>
              <InputLabel htmlFor="demo-dialog-native">Infants</InputLabel>
              <Select
                native
                value={infants}
                onChange={handleChange}
                input={<OutlinedInput label="Infants" id="demo-dialog-native" />}
              > 
                {optionData.map((item) => (
                  <option value={item.value}>{item.name}</option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
