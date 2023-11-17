import { Stack, Typography } from "@mui/material";
import React from "react";



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface ButtonBlockProps {
  sx?: any;
  variant?: "contained" | "outlined" | "text"
  label?: string
}

const SelectBlock:React.FC<ButtonBlockProps> = ({label}) => {
  const [age, setAge] = React.useState('');

  const handleChange = (event:SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <FormControl sx={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-helper-label">{label || "Age"}</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label={label || "Age"}
          onChange={handleChange}

          sx={{position:"relative" ,".MuiSelect-icon":{
            color:"#449FDC",
          },
          ".MuiOutlinedInput-notchedOutline":{
            borderRadius:"8px"
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: "calc(50% - .5em)",
            right: 35,
            height: '20px',
            borderLeft: '1px solid #d9d9d9',
            zIndex: 0, // Set the border behind the icon
          },
        
        }}

        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
  );
};

export default SelectBlock;
