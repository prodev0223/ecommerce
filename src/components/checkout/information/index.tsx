
import CheckoutHeader from "../checkout-header";
import OrderSummary from "../order-summary";
import MainColumn from "./main-column";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";

export default function InformationMain() {
  return (
    <Box
      sx={{
        backgroundColor: "#449FDC",
        maxHeight: {md:"100vh"},
        overflow:"hidden"
      }}
    >
      <CheckoutHeader />

      <Stack sx={{ flexDirection: {xs:"column-reverse" , md:"row"}, gap: {xs:"0", md:"25px"}
      , bgcolor:{xs:"#fff" , md:"transparent"}
    }}>
        <MainColumn />
        <OrderSummary />
      </Stack>

    </Box>
  );
}
