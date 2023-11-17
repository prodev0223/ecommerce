import { Box , Stack , Sheet , Badge , Avatar , Typography , Divider} from "@mui/joy";
import CheckoutHeader from "../checkout-header";
import OrderSummary from "../order-summary";
import MainColumn from "./main-column";


export default function ShippingMain() {
    return (
        <Box sx={{
            backgroundColor: '#449FDC',
            maxHeight: {md:"100vh"},
            overflow:"hidden"
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