import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

import {
  Badge,
  Avatar,
  Chip,
  Divider,
  Paper,
  Typography,
  styled,
} from "@mui/material";
import InputBlock from "../common/input-block";
import ButtonBlock from "../common/button-block";
import { ReactComponent as DiscountIcon } from "../../assets/images/icons/discount.svg";
import { ReactComponent as DiscountGreyIcon } from "../../assets/images/icons/discount-grey.svg";
import { StyledFlexContainerRowCentered } from "../common/flex-container";
import { Text14 } from "../common/text-block";

const paperStyles = {
  bgcolor: "#fff",
  // maxWidth: { xs: "100%", md: "448px" },
  width: { xs: "100%", md: "32%" },
  height: "fit-content",
  borderRadius: { xs: "0px", md: "10px" },
  padding: "15px",
  boxSizing: "border-box",
  boxShadow: "none",
  border: { xs: "0 0 2px solid #449FDC 0", md: "initial" },
  borderBottom: "2px solid #449FDC",
  marginTop: { xs: "0", md: "30px" },
};

const StyledAvatar = styled(Avatar)({
  width: "80px",
  height: "80px",
  borderRadius: "10px",
  border: "1.25px solid #D9D9D9",
})

export default function OrderSummary({
  target,
  status,
}: {
  target?: string;
  status?: string;
}) {
  console.log("target", target, target !== "status");
  return (
    <Paper variant="outlined" sx={paperStyles}>
      <StyledFlexContainerRowCentered gap="14px" mb="21px">
        <Badge badgeContent={4} color="primary">
          <StyledAvatar
            variant="rounded"
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg"
          />
        </Badge>
        <Box sx={{ flex: 1 }}>
          <Typography variant="h6" sx={{ color: "#333333" }}>
            Monstera Deliciosa
          </Typography>
          <Typography variant="body1" sx={{ color: "#737373" }}>
            2 feet
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ color: "#333333" }}>
          100$
        </Typography>
      </StyledFlexContainerRowCentered>

      <Divider variant="fullWidth" />

      {target !== "status" && (
        <>
          <Stack flexDirection="row" gap="14px" mt="21px">
            <InputBlock sx={{ flex: "1" }} label="Discount code" />
            <ButtonBlock
              title="Apply"
              disabled={true}
              sx={{ padding: "16px 17px" }}
            />
          </Stack>
          <Chip
            color="primary"
            icon={<DiscountIcon />}
            label="SPRINGSALE"
            variant="filled"
            onDelete={() => {}}
            sx={{
              borderRadius: "5px",
              marginTop: "14px",
              marginBottom: "21px",
              bgcolor:"#449FDC"
            }}
          />

          <Divider variant="fullWidth" />
        </>
      )}

      <Stack m="21px 0" gap="11px">
        <StyledFlexContainerRowCentered>
          <Text14>Subtotal</Text14>
          <Text14>$100.00</Text14>
        </StyledFlexContainerRowCentered>
        <StyledFlexContainerRowCentered>
          <Text14>Shipping</Text14>
          <Text14>$10.00</Text14>
        </StyledFlexContainerRowCentered>
        <StyledFlexContainerRowCentered>
          <Stack flexDirection="row" alignItems="center" gap="17px">
            <Text14>Discount</Text14>
            <Chip
              color="default"
              icon={<DiscountGreyIcon />}
              label="SPRINGSALE"
              variant="outlined"
              sx={{ border: "none", fontSize: "14px", color: "#545454" }}
            />
          </Stack>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            $10.00
          </Typography>
        </StyledFlexContainerRowCentered>

        {target === "status" && status == "cancelled" && (
          <StyledFlexContainerRowCentered>
            <Box sx={{ position: "relative" }}>
              <Text14
                sx={{
                  textDecoration: "underline",
                }}
              >
                Parcel insurance
              </Text14>
            </Box>
            <Text14>$10.00</Text14>
          </StyledFlexContainerRowCentered>
        )}

        <StyledFlexContainerRowCentered>
          <Text14>Taxes</Text14>
          <Text14>$5.00</Text14>
        </StyledFlexContainerRowCentered>
      </Stack>

      <Divider variant="fullWidth" />
      <StyledFlexContainerRowCentered sx={{ marginTop: "21px" }}>
        <Typography>Total</Typography>
        <Typography variant="h3" sx={{ fontSize: "24px", color: "#333333" }}>
          <span style={{ fontSize: "12px", paddingRight: "9px" }}>usd</span>
          $120.00
        </Typography>
      </StyledFlexContainerRowCentered>
    </Paper>
  );
}
