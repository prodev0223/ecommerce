import { InputAdornment, Stack, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

interface InputBlockProps {
  sx?: any;
  icon?: React.ReactElement;
  label?: string;
}

const InputBlock: React.FC<InputBlockProps> = ({ sx, icon, label }) => {
  return (
    <TextField
    size="medium"
      sx={{ ...sx , backgroundColor:"#fff" , ".MuiOutlinedInput-notchedOutline":{
        borderRadius:"8px"
      }}}
      inputProps={{
        startAdornment: icon && (
          <InputAdornment position="start">{icon}</InputAdornment>
        ),
      }}
      id="outlined-basic"
      label={label || "Outlined"}
      variant="outlined"
    />
  );
};

export default InputBlock;
