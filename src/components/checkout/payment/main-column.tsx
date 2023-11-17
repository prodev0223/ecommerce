import {
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import ButtonBlock from "../../common/button-block";
import Payment from "./payment";
import BillingAddress from "./billing-address";
import CheckoutFooter from "../checkout-footer";
import { Text14 } from "../../common/text-block";
import MainColumnWrapper from "../../common/main-column-wrapper";
import AddTip from "./add-tip";
import BreadcrumbBlock from "../../common/Breadcrumb-block";
import { StyledFlexContainerRowCentered } from "../../common/flex-container";
import { useNavigate } from "react-router-dom";

export default function MainColumn() {
  const navigate = useNavigate()

  return (
    <MainColumnWrapper>
      <BreadcrumbBlock />
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
          <ButtonBlock variant="text" title="Change" />
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
          <ButtonBlock variant="text" title="Change" />
        </StyledFlexContainerRowCentered>
      </Stack>


      <Stack sx={{ marginTop: "34px" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            marginBottom: "14px",
          }}
        >
          Add tip
        </Typography>
        <AddTip />
      </Stack>

      <Stack sx={{ marginTop: "34px" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
            marginBottom: "14px",
          }}
        >
          Payment
        </Typography>
        <Payment />
      </Stack>

      <Stack sx={{ marginTop: "34px" }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: "18px",
            fontWeight: "400",
            lineHeight: "27px",
          }}
        >
          Billing Address
        </Typography>

        <Text14 sx={{ color: "#545454", marginBottom: "14px" }}>
          Select the address that matches your card of payment method.
        </Text14>
        <BillingAddress />
      </Stack>

      <StyledFlexContainerRowCentered
        sx={{ marginTop: "34px", marginBottom: "77px" }}
      >
        <ButtonBlock variant="text" title="Return to shipping" onClick={() => navigate("/checkout/shipping")} />
        <ButtonBlock title="Continue shopping" onClick={() => navigate("/checkout/order/status/pending")} />
      </StyledFlexContainerRowCentered>

      <Divider variant="fullWidth" />

      <CheckoutFooter />
    </MainColumnWrapper>
  );
}
