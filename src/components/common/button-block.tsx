import { styled } from "@mui/material";
import Button , {ButtonOwnProps} from "@mui/material/Button";
import React from "react";


const StyledButton = styled(Button)({
  textTransform: "capitalize",
  width: "fit-content",
  borderRadius: "10px",
  paddingY:"21px",
  fontSize:"14px",
})


interface ButtonBlockProps extends ButtonOwnProps {
  variant?: "contained" | "outlined" | "text";
  title?: string;
  disabled?: boolean;
  onClick?: () => any;
  sx?: any
  bgcolor?: string
}

const ButtonBlock: React.FC<ButtonBlockProps> = ({
  variant,
  title,
  disabled,
  onClick,
  sx,
  bgcolor,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant || "contained"}
      sx={{
        bgcolor,
        ...sx
      }}
      disabled={disabled || false}
      onClick={onClick}

      {...props}
    >
      {title || "Submit"}
    </StyledButton>
  );
};

export default ButtonBlock;
