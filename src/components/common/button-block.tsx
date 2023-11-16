import { Button, Stack, Typography } from "@mui/material";
import React from "react";

interface ButtonBlockProps {
  variant?: "contained" | "outlined" | "text"
  title?: string
  disabled?: boolean
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({variant , title , disabled}) => {
  return (
    <Button variant={variant || "contained"} sx={{textTransform:"capitalize" , width:"fit-content" , borderRadius:"10px"}} disabled={disabled || false}>{title || "Submit"}</Button>
  );
};

export default ButtonBlock;
