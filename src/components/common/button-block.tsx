import { Button, Stack, Typography } from "@mui/material";
import React from "react";

interface ButtonBlockProps {
  variant?: "contained" | "outlined" | "text";
  title?: string;
  disabled?: boolean;
  onClick?: () => any;
  sx?: any
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({
  variant,
  title,
  disabled,
  onClick,
  sx
}) => {
  return (
    <Button
      variant={variant || "contained"}
      sx={{
        textTransform: "capitalize",
        width: "fit-content",
        borderRadius: "10px",
        paddingY:"21px",
        fontSize:"14px",
        ...sx
      }}
      disabled={disabled || false}
      onClick={onClick}
    >
      {title || "Submit"}
    </Button>
  );
};

export default ButtonBlock;
