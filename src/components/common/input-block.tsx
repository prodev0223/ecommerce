import { InputAdornment } from "@mui/material";
import React from "react";
import TextField, { BaseTextFieldProps } from "@mui/material/TextField";

interface InputBlockProps extends BaseTextFieldProps {
  id?:string;
  name?:string;
  startIcon?: React.ReactElement | string;
  endIcon?: React.ReactElement | string;
  label?: string;
  value?:string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  error?: boolean;
  helperText?: string | boolean
}

const InputBlock: React.FC<InputBlockProps> = ({ sx, startIcon ,endIcon , label , ...props }) => {
  return (
    <TextField
    size="medium"
      sx={{ ...sx , ".MuiInputBase-root":{
        backgroundColor:"#fff" 
      }, ".MuiOutlinedInput-notchedOutline":{
        borderRadius:"8px"
      }}}

      InputProps={{
        startAdornment: startIcon && <InputAdornment position="start">{startIcon}</InputAdornment>,
        endAdornment: endIcon && <InputAdornment position="end">{endIcon}</InputAdornment>,
      }}

      // label={label}

      placeholder={label}
      variant="outlined"

      {...props}
    />
  );
};

export default InputBlock;
