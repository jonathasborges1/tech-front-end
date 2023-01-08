import React,  { useEffect } from 'react';
import InputAdornment from '@mui/material/InputAdornment';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import Input from '@mui/material/Input';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
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
    console.log("meu index-> ",e); 
    return props.onClick(e);
  }


  return (
    <StyledList sx={{ width: '100%', maxWidth: 1360, bgcolor: 'background.paper' }} {...props} >
      {props.itemList.map((value,index) => {
        const labelId = `checkbox-list-label-${value}`;

        return (
          <ListItem sx={{ minWidth: '100%'}}
            key={index}
            value={index}
            // id={index}
            secondaryAction={
              <IconButton
                value={index}
                edge="end" 
                aria-label="comments" 
                sx={{ minWidth: '100%',color:"white"}} 
                onClick={ (e) => { handleOnClick(e,index) } }
                >
                <DeleteForeverIcon sx={{color: "red"}}  />
              </IconButton>
            }
            disablePadding
          >

            <ListItemButton role={undefined} onClick={handleToggle(value)} dense sx={{ minWidth: '100%'}}>

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
                    key={value}
                    defaultValue={value }
                    color='primary'
                    id="standard-adornment-password"
                    type="text"
                    //onClick={props.onClick}
                    onChange={props.onChange}
                />           
         </ListItemButton>


          </ListItem>
        );
      })}
    </StyledList>
  );
}


export default ListTodo;

const StyledList = withStyles({
    root: {
      minWidth: "80%",
      // border: "2px solid red" ,
      // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      color: 'white !important' ,
      // borderBottom: "2px solid blue",
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


// function List(props) {

//     return (
//         <ul >
//             {props.itemList.map( (item, index) => {
//                 return(
//                 <li key={index} style={{listStyle: "none", margin: "2rem"}} > 
//                     {/* <input type="checkbox" /> */}
//                     <input type="text" defaultValue={item} onChange={props.onChange} id={index} style={props.style}/> 
//                     <button value={index} onClick={props.onClick}>excluir</button> 
//                 </li>
//                 )
//             })}
//         </ul>
//     )
// }



{/* <ListItemButton role={undefined} onClick={handleToggle(value)} dense>
              
<ListItemIcon></ListItemIcon>

  <Checkbox
    edge="start"
    checked={checked.indexOf(value) !== -1}
    tabIndex={-1}
    disableRipple
    inputProps={{ 'aria-labelledby': labelId }}
  />


  <input type="text" />

<ListItemText id={labelId} sx={{fontSize: "2rem"}} primary={`${value}`} />
</ListItemButton> */}