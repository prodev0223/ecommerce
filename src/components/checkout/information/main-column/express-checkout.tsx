
import {
    Box,
    Grid,
    IconButton,
    styled
  } from "@mui/material";


  import {ReactComponent as PaypalIcon} from '../../../../assets/images/express-checkout/paypal.svg'
  import {ReactComponent as AmazonPayIcon} from '../../../../assets/images/express-checkout/amazon-pay.svg'
  import {ReactComponent as ApplePayIcon} from '../../../../assets/images/express-checkout/apple-pay.svg'
  import {ReactComponent as GooglePayIcon} from '../../../../assets/images/express-checkout/google-pay.svg'


const StyledIconButton = styled(IconButton)({
    height: "42px",
    width: "100%",
    borderRadius: "4px",
    display: "grid",
    placeItems: "center",
})


const StyledLegend = styled("legend")({
  textAlign: "center",
  color: "#333333",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "21px",
  padding: "0 14px",
})


export default function ExpressCheckout() {
    return(
        <Box component="fieldset" mt="27px">
        <StyledLegend
        >
          Express Checkout
        </StyledLegend>
        <Grid container spacing={"9px"}>
          <Grid item xs={6}>
            <StyledIconButton
              sx={{
                bgcolor: "#F6C556",
              }}
            >
             <PaypalIcon />
            </StyledIconButton>
          </Grid>
          <Grid item xs={6}>
            <StyledIconButton
              sx={{
                border: "1px solid #F6C556",
              }}
            >
              <AmazonPayIcon />
            </StyledIconButton>
          </Grid>
          <Grid item xs={6}>
            <StyledIconButton
              sx={{
                border: "1px solid #F2F4F7",
              }}
            >
              <GooglePayIcon />
            </StyledIconButton>
          </Grid>
          <Grid item xs={6}>
            <StyledIconButton
              sx={{
                bgcolor: "#000",
                "&:hover":{
                  bgcolor: "rgba(0,0,0,0.6)"
                }
              }}
            >
              <ApplePayIcon />
            </StyledIconButton>
          </Grid>
        </Grid>
      </Box>

    )
}