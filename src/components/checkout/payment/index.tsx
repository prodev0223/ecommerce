import { Box , Stack , Sheet , Badge , Avatar , Typography , Divider} from "@mui/joy";
import CheckoutHeader from "../checkout-header";
import OrderSummary from "../order-summary";
import MainColumn from "./main-column";


export default function PaymentMain() {
    return (
        <Box sx={{
            backgroundColor: '#449FDC',
            minHeight: "100vh",
          }}>
    
            <CheckoutHeader />

            <Stack sx={{ flexDirection: {xs:"column-reverse" , md:"row"}, gap: {xs:"0", md:"25px"}
      , bgcolor:{xs:"#fff" , md:"transparent"}
    }}>
                <MainColumn />
                <OrderSummary />

            </Stack>
    
          
          </Box>
    )
}