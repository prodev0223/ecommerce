import * as React from "react";
import Box from "@mui/joy/Box";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import { Stack, Typography } from "@mui/material";

export default function AddTipRadio() {
  const [alignment, setAlignment] = React.useState("left");

  const tipItem = (percentage:string , price:string) => {
    return (
      <Stack sx={{ alignItems: "center", justifyContent: "center" }}>
        <Typography sx={{ fontSize: "14px", color:"#545454" }}>{percentage}</Typography>
        <Typography variant="body2" sx={{ color: "#737373", fontSize: "12px" }}>
          {price}
        </Typography>
      </Stack>
    );
  };

  return (
    <RadioGroup
      orientation="horizontal"
      aria-label="Alignment"
      name="alignment"
      variant="outlined"
      value={alignment}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
        setAlignment(event.target.value)
      }
    >
      {["left", "center", "right", "justify"].map((item) => (
        <Box
          key={item}
          sx={(theme) => ({
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "55px",
            "&:not([data-first-child])": {
              borderLeft: "1px solid",
              borderColor: "divider",
            },
            [`&[data-first-child] .${radioClasses.action}`]: {
              borderTopLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomLeftRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
            [`&[data-last-child] .${radioClasses.action}`]: {
              borderTopRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
              borderBottomRightRadius: `calc(${theme.vars.radius.sm} - 1px)`,
            },
          })}
        >
          <Radio
            value={item}
            disableIcon
            overlay
            label={
              {
                left: tipItem("15%" , "$14.70"),
                right: tipItem("18%" , "$17.64")
                ,
                center: tipItem("20%" , "$19.60"),
                justify: tipItem("None" , ""),
              }[item]
            }
            variant={alignment === item ? "outlined" : "plain"}
            slotProps={{
              input: { "aria-label": item },
              action: {
                sx: { borderRadius: 0, transition: "none" },
              },
              label: { sx: { lineHeight: 0 } },
            }}

          />
        </Box>
      ))}
    </RadioGroup>
  );
}
