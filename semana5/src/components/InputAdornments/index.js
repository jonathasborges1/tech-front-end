import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { withStyles } from '@mui/styles';


function InputAdornments(props) {

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', }} {...props}>
      <FormControl sx={{ m: 1, minWidth: '97%' , }} variant="standard">
        <InputLabel htmlFor="standard-adornment-password" sx={{color: "white", fontSize: "1.8rem", marginLeft: "0.5rem"}}>Add item</InputLabel>
        
        <StyledInput 
          value={props.task}
          color='primary'
          id="standard-adornment-password"
          type="text"
          //onChange={handleChange}
          onClick={props.handleOnSubmitAddItemToList}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={props.handleOnSubmitAddItemToList}
                onMouseDown={handleMouseDownPassword}
                sx={{}}
              >
                <AddCircleOutlineOutlinedIcon sx={{color: "white", fontSize: "2.5rem"}} />
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}


export default InputAdornments;


const StyledInput = withStyles({
  root: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white !important' ,
    borderBottom: "2px solid blue",
    padding: '1rem',
    fontSize: "2rem !important",
    // border: "2px solid red" ,
    // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
  formControl : {

  },
  input : {

  },
})(Input);