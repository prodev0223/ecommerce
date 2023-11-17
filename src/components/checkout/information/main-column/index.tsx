import {
  Box,
  Typography,
  Divider,
} from "@mui/material";
import { StyledFlexContainerRowCentered } from "../../../common/flex-container";
import CheckoutFooter from "../../checkout-footer";
import BreadcrumbBlock from "../../../common/Breadcrumb-block";
import ButtonBlock from "../../../common/button-block";
import { useNavigate } from "react-router-dom";
import MainColumnWrapper from "../../../common/main-column-wrapper";
import ExpressCheckout from "./express-checkout";
import ContactInformation from "./contact-information";
import ShippingAddress from "./shipping-address";

export default function MainColumn() {
  const navigate = useNavigate();
  return (
    <MainColumnWrapper>
      <BreadcrumbBlock />
      <ExpressCheckout />

      <StyledFlexContainerRowCentered sx={{ margin: "14px 0" }}>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            flex: "1",
            background: "#D9D9D9",
          }}
        />
        <Typography sx={{ padding: "0 14px" }}>Or</Typography>
        <Box
          sx={{
            height: "1px",
            width: "100%",
            flex: "1",
            background: "#D9D9D9",
          }}
        />
      </StyledFlexContainerRowCentered>

      <ContactInformation />

      <ShippingAddress />

      <StyledFlexContainerRowCentered
        sx={{
          marginTop: "34px",
          marginBottom: "77px",
          flexDirection: { xs: "column-reverse", sm: "row" },
        }}
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
