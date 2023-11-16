import Stack from "@mui/joy/Stack";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ReactComponent as PenthouseSupplyLogo } from "../../assets/images/logos/penthouse-supply.svg";
import { useNavigate } from "react-router-dom";

export default function CheckoutHeader() {
  const navigate = useNavigate()
  return (
    <Stack
      sx={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: "8px 23px",
      }}
    >
      <IconButton onClick={() => navigate(-1)}>
        <ArrowBackIcon sx={{ color: "#fff", fontSize: "26px" }} />
      </IconButton>
      <PenthouseSupplyLogo />
      <Box />
    </Stack>
  );
}
