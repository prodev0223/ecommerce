import { Box, Typography, Divider, styled } from "@mui/material";
import { StyledFlexContainerRowCentered } from "../../../common/flex-container";
import CheckoutFooter from "../../checkout-footer";
import BreadcrumbBlock from "../../../common/Breadcrumb-block";
import ButtonBlock from "../../../common/button-block";
import { useNavigate } from "react-router-dom";
import MainColumnWrapper from "../../../common/main-column-wrapper";
import ExpressCheckout from "./express-checkout";
import ContactInformation from "./contact-information";
import ShippingAddress from "./shipping-address";

const HorizontalLine = styled(Box)({
  height: "1px",
  width: "100%",
  flex: "1",
  background: "#D9D9D9",
});

export default function MainColumn() {
  const navigate = useNavigate();
  return (
    <MainColumnWrapper>
      <BreadcrumbBlock />
      <ExpressCheckout />
      
      <StyledFlexContainerRowCentered m="14px 0">
        <HorizontalLine />
        <Typography p="0 14px">Or</Typography>
        <HorizontalLine />
      </StyledFlexContainerRowCentered>

      <ContactInformation />
      <ShippingAddress />

      <StyledFlexContainerRowCentered
        flexDirection={{ xs: "column-reverse", sm: "row" }}
        mt="34px"
        mb={{ xs: "17px", md: "77px" }}
        gap={{ xs: "5px", md: "0" }}
      >
        <ButtonBlock
          variant="text"
          title="Return to cart"
          onClick={() => navigate("/cart")}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        />
        <ButtonBlock
          title="Continue shopping"
          onClick={() => navigate("/checkout/shipping")}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        />
      </StyledFlexContainerRowCentered>

      <Divider variant="fullWidth" />

      <CheckoutFooter />
    </MainColumnWrapper>
  );
}
