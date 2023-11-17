import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactComponent as PenthouseSupplyLogo } from "../../assets/images/logos/penthouse-supply.svg";
import { useNavigate } from "react-router-dom";
import SelectBlock from "../common/select-block";
import { Text18 } from "../common/text-block";
import { FormControl, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import React from "react";

export default function CheckoutHeader() {

  const [summaryStatus, setSummaryStatus] = React.useState('hidden');

  const handleChange = (event: SelectChangeEvent) => {
    setSummaryStatus(event.target.value);
  };


  const navigate = useNavigate()
  return (
    <>
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: {xs:"center" , md:"space-between"},
        padding: "8px 23px",
      }}
    >
      <IconButton onClick={() => navigate(-1)} sx={{display:{xs:"none" , md:"block" }}}>
        <ArrowBackIcon sx={{ color: "#fff", fontSize: "26px" }} />
      </IconButton>
      <PenthouseSupplyLogo />
      <Box />
    </Stack>

    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems:"center",
        padding: "6px 14px",
        display:{xs:"flex" , md:"none"},
        bgcolor:"#F6ECE5"

      }}
    >

    <FormControl sx={{ m: 1, minWidth: "178px"  }}>
      <Stack sx={{flexDirection:"row" , gap:"5px" , width:"100%"}}>
      <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M3.125 5.19906C3.125 4.68129 3.54473 4.26156 4.0625 4.26156H6.07748C7.16741 4.26156 8.088 5.06319 8.24256 6.13656H20.3125C20.5736 6.13656 20.8229 6.24547 21.0004 6.43707C21.1778 6.62867 21.2673 6.8856 21.2472 7.14596L20.7998 12.9627C20.662 14.7536 19.1686 16.1366 17.3724 16.1366H9.4337L9.54971 17.111C9.56842 17.2682 9.70172 17.3866 9.86002 17.3866H17.8125C18.3303 17.3866 18.75 17.8063 18.75 18.3241C18.75 18.8418 18.3303 19.2616 17.8125 19.2616H9.86002C8.75192 19.2616 7.81885 18.433 7.68786 17.3326L6.38779 6.41212C6.36908 6.25493 6.23578 6.13656 6.07748 6.13656H4.0625C3.54473 6.13656 3.125 5.71683 3.125 5.19906ZM9.21049 14.2616H17.3724C18.1889 14.2616 18.8677 13.633 18.9303 12.8189L19.3001 8.01156H8.46644L9.21049 14.2616ZM12.5 21.7616C12.5 22.4519 11.9404 23.0116 11.25 23.0116C10.5596 23.0116 10 22.4519 10 21.7616C10 21.0712 10.5596 20.5116 11.25 20.5116C11.9404 20.5116 12.5 21.0712 12.5 21.7616ZM18.75 21.7616C18.75 22.4519 18.1904 23.0116 17.5 23.0116C16.8096 23.0116 16.25 22.4519 16.25 21.7616C16.25 21.0712 16.8096 20.5116 17.5 20.5116C18.1904 20.5116 18.75 21.0712 18.75 21.7616Z" fill="#449FDC"/>
      </svg>


      <Select
      disableUnderline
          value={summaryStatus}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
          variant="standard"
          sx={{flex:"1" , color:"#449FDC" , width:"100%" , backgroundColor:"transparent" , ".MuiSvgIcon-root":{fill:"#449FDC"}}}
        >
          <MenuItem value={"visible"}>View order summary</MenuItem>
          <MenuItem value={"hidden"}>Hide order summary</MenuItem>
        </Select>
      </Stack>
     

      </FormControl>
      <Text18>
        $105.00
      </Text18>
    </Stack>

    </>

  );
}
