import React, { useState } from "react";
import {
  Avatar,
  Stack,
  FormControl,
  FormHelperText,
  IconButton,
  InputLabel,
  InputAdornment,
  OutlinedInput,
  TextField,
  Button,
  Typography,
  Tooltip
} from '@mui/material';
import Assignment from '@mui/icons-material/Assignment';
import ClearIcon from '@mui/icons-material/Clear';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import LocationAndTime from "./LocationAndTime";

const axios = require('axios');


const OrderItemForm = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [pickup, setPickup] = useState([{ location: "", time: "" }]);

  const handlePickupChange = (i) => (e) => {
    let formData = [...pickup];
    console.log('E', e.target.value)
    formData[i][e.target.name] = e.target.value;
    setPickup(formData);
  }

  const addPickupFields = () => setPickup([...pickup, { location: "", time: "" }]);

  const removePickupFields = (i) => {
    let formData = [...pickup];
    formData.splice(i, 1);
    setPickup(formData)
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  }
  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  }
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  }
  const handleDateChange = (event) => {
    setDate(event.target.value);
  }
  const handleImgChange = (event) => {
    setImg(event.target.value);
  }
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  }

  const handleSubmit = () => {
    console.log(name, quantity, price, date, pickup, img, description);
    axios.post("/api/order_items", {
      name: name,
      price: price,
      order_quantity: quantity,
      description: description,
      img_url: img,
      created_at: new Date().toDateString(),
      order_date: date,
      locations: pickup
    }).then(response => {
      console.log('response: ', response);
      if (response.status === 201) {
        window.location.reload();
      }
    });
  }

  return (
    <Stack width="75%" padding="2em" margin="1em" border="1px solid" borderRadius="10px">
      <Stack alignItems="center">
        <Avatar sx={{ bgcolor: 'green', margin: '0.5em' }} variant="rounded">
          <Assignment />
        </Avatar>
        <Typography variant="h4">
          Create an Order
        </Typography>
      </Stack>
      <Stack marginTop="1em">
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-name-input"
            label="Item Name"
            type="name"
            InputLabelProps={{ shrink: true }}
            onChange={handleNameChange}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, marginTop: 2, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Stack width="49%">
            <InputLabel htmlFor="outlined-adornment-price">Price</InputLabel>
            <OutlinedInput
              id="outlined-adornment-price"
              startAdornment={<InputAdornment position="start">$</InputAdornment>}
              label="Price"
              onChange={handlePriceChange}
            />
          </Stack>
          <TextField
            id="outlined-quantity-input"
            label="Item Quantity"
            type="number"
            InputLabelProps={{ shrink: true }}
            onChange={handleQuantityChange}
            sx={{ width: '49%' }}
          />
        </FormControl>
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-date-input"
            label="Order Date"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={handleDateChange}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
      </Stack>
      <Stack alignItems="center">
        <Typography paddingTop="1em">Pick Up Location(s)</Typography>
        {pickup.map((pickupValue, i) => (
          <Stack key={i} flexDirection="row" alignItems="center" width="100%">
            <LocationAndTime handleInputChange={handlePickupChange(i)} value={pickupValue} />
            {i > 0 ?
              // <Button variant="outlined" color="error" sx={{border:"unset"}}>
              <Tooltip title="Delete pick up location" placement="right-start">
                <IconButton size="small" color="error" onClick={() => removePickupFields(i)}>
                  <DeleteForeverIcon />
                </IconButton>
              </Tooltip> :
              <Tooltip title="Add pick up location" placement="right-start">
                <IconButton size="small" onClick={addPickupFields} color="success">
                  <AddCircleOutlineIcon />
                </IconButton>
              </Tooltip>
              // </Button>
            }
          </Stack>
        ))
        }
        {/* <LocationAndTime handleLocationChange={handleLocationChange} handleTimeChange={handleTimeChange} /> */}
        {/* <Button sx={{ margin: 1 }} onClick={addPickupFields}>
          Add Location
        </Button> */}
      </Stack>
      <Stack marginTop="1em">
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-name-input"
            label="Image"
            type="url"
            InputLabelProps={{ shrink: true }}
            onChange={handleImgChange}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        {/* <Button variant="contained" component="label">
          Upload Image
          <input type="file" hidden />
        </Button> */}
      </Stack>
      <Stack>
        <FormControl sx={{ minWidth: 120, paddingTop: 2 }}>
          <TextField
            id="outlined-multiline-static"
            label="Description"
            multiline
            rows={3}
            InputLabelProps={{ shrink: true }}
            inputProps={{ maxLength: 255 }}
            onChange={handleDescriptionChange}
          />
          <FormHelperText sx={{ marginLeft: 'unset' }}>Maximum 255 characters</FormHelperText>
        </FormControl>
      </Stack>
      <Button variant="contained" sx={{ marginTop: '2em' }} onClick={handleSubmit}>
        CREATE ORDER
      </Button>
    </Stack>
  );
};

export default OrderItemForm;
