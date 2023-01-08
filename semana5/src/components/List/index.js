import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { withStyles } from '@mui/styles';
import Checkbox from '@mui/material/Checkbox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function ListTodo(props) {
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleOnClick = (e,index) => {
    e.target.value = index;
    return props.onClick(e);
  }

  const handleOnChange = (e,index,value) => {
    e.target.key = index;
    e.target.defaultValue = value;
    return props.onChange(e);
  }

  return (
    <StyledList sx={{ width: '100%', maxWidth: 360 }} {...props} >
      {props.itemlist.map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <StyledListItem 
            key={index}
            sx={{minWidth: '20%', backgroundColor: props.hasbackground.length > 0 && props.hasbackground[index]?.status && props.hasbackground[index].index === index ? "blue" : "none" }}
            secondaryAction={
              <IconButton
                value={index}
                edge="end" 
                aria-label="comments" 
                sx={{ minWidth: '20%',color:"white"}} 
                onClick={ (e) => { handleOnClick(e,index) } }
                >
                <DeleteForeverIcon sx={{color: "red"}}  />
              </IconButton>
            }
            disablePadding
          >

            <ListItemButton role={undefined} onClick={handleToggle(value)} dense sx={{ minWidth: '10%'}}>

              <ListItemIcon sx={{}}>
                <Checkbox
                  edge="start"
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  sx={{color: "white"}}
                />
              </ListItemIcon>

              <StyledInput 
                    key={index}
                    defaultValue={value}
                    color='primary'
                    id="standard-adornment-password"
                    type="text"
                    onClick={props.onClick}
                    onChange={(e) => { handleOnChange(e,index,value) } }
                />           
            </ListItemButton>


          </StyledListItem>
        );
      })}
    </StyledList>
  );
}


export default ListTodo;

const StyledListItem = withStyles({
    root: {
      minWidth: "30%",
      color: 'white !important' ,
      padding: '1rem',
      fontSize: "2rem !important",
      "&.MuiListItem-root": {
        marginBottom: "1rem",
        // your root styles but with even higher CSS specificity
        }
    },
    label: {
      textTransform: 'capitalize',
    },
  })(ListItem);

const StyledList = withStyles({
root: {
    minWidth: "30%",
    background: "none !important",
    backgroundColor: "none !important",
    color: 'white !important' ,
    padding: '1rem',
    fontSize: "2rem !important",
},
label: {
    textTransform: 'capitalize',
},
formControl : {

},
input : {

},
})(List);

const StyledInput = withStyles({
    root: {
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      minWidth: "100%",
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

