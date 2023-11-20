import { Divider, Stack, Typography, styled } from "@mui/material";
import ShippingMethod from "./shipping-method";
import CheckoutFooter from "../../checkout-footer";
import ButtonBlock from "../../../common/button-block";
import CustomSeparator from "../../../common/Breadcrumb-block";
import { Text18 } from "../../../common/text-block";
import MainColumnWrapper from "../../../common/main-column-wrapper";
import { useNavigate } from "react-router-dom";
import { StyledFlexContainerRowCentered } from "../../../common/flex-container";

export default function MainColumn() {
  const navigate = useNavigate();

  return (
    <MainColumnWrapper>
      <CustomSeparator />
      <Stack
        sx={{
          padding: "12px 16px",
          gap: "12px",
          border: "1px solid #D9D9D9",
          borderRadius: "5px",
          marginTop: "17px",
        }}
      >
        <StyledFlexContainerRowCentered>
          <Typography sx={{ width: "70px" }}>Contact</Typography>
          <Typography sx={{ flex: "1" }}>name@email.com</Typography>
          <ButtonBlock variant="text" title="Change" sx={{ padding: 0 }} />
        </StyledFlexContainerRowCentered>
        <Divider variant="fullWidth" />
        <StyledFlexContainerRowCentered>
          <Typography sx={{ width: "70px" }}>Ship to</Typography>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "21px",
              color: "#333333",
              flex: "1",
            }}
          >
            151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada
          </Typography>
          <ButtonBlock variant="text" title="Change" sx={{ padding: 0 }} />
        </StyledFlexContainerRowCentered>
      </Stack>

      <Stack mt="34px">
        <Text18
          variant="h2"
          sx={{
            marginBottom: "14px",
          }}
        >
          Shipping method
        </Text18>
        <ShippingMethod />
      </Stack>

      <StyledFlexContainerRowCentered
          flexDirection={{ xs: "column-reverse", sm: "row" }}
          mt="34px"
          mb={{ xs: "17px", md: "77px" }}
          gap={{ xs: "5px", md: "0" }}
      >
        <ButtonBlock
          variant="text"
          title="Return to information"
          onClick={() => navigate("/checkout/information")}
          sx={{ width: { xs: "100%", sm: "fit-content" } ,  color:"#449FDC" }}
        />
        <ButtonBlock
          title="Continue shopping"
          bgcolor="#449FDC"
          onClick={() => navigate("/checkout/payment")}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        />
      </StyledFlexContainerRowCentered>

      <Divider variant="fullWidth" />

      <CheckoutFooter />
    </MainColumnWrapper>
  );
}
