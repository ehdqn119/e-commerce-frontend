import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const optionData = [
  {
    name : 'one-way',
    value : 'one-way',
  },
  {
    name : 'multi-way',
    value : 'multi-way',
  },
]

let Layout = {
  title : 'Roundtrip',
  
}

export default function SelectBox() {
  const [open, setOpen] = useState(false);
  const [roundTrip, setRoundTrip] = useState('one-way');
  const [result, setResult] = useState('one-way');
  const handleChange = (event) => {
    setRoundTrip(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCancel = (event, reason) => {
    setResult(result);
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const handleOk = (event, reason) => {
    setResult(roundTrip);
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  }

  return (
    <div>
      <Button onClick={handleClickOpen}>{Layout.title}</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleCancel}>
        <DialogTitle>Round Trip</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                native
                value={roundTrip}
                onChange={handleChange}
                input={<OutlinedInput label="RoundTrip" id="demo-dialog-native" />}
              >
                {optionData.map((item) => (
                  <option key={item} value={item.value}>{item.name}</option>
                ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
