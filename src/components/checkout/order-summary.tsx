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

const StyledFlexContainerRowCentered = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function OrderSummary({ target }: { target?: string }) {
  console.log("target", target, target !== "status");
  return (
    <Paper
      variant="outlined"
      sx={{
        bgcolor: "#fff",
        maxWidth: {xs:"100%",md:"448px"},
        width: { xs: "100%", md: "448px" },
        height: "fit-content",
        borderRadius: { xs: "0px", md: "10px" },
        padding: "15px",
        boxSizing: "border-box",
        boxShadow:"none",
        border:{xs:"0 0 2px solid #449FDC 0" , md:"initial"},
        borderBottom: '2px solid #449FDC',
        marginTop:{xs:"0" , md:"30px"}
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "14px",
          marginBottom: "21px",
        }}
      >
        <Badge badgeContent={4} color="primary">
          <Avatar
            variant="rounded"
            sx={{
              width: "80px",
              height: "80px",
              borderRadius: "10px",
              border: "1.25px solid #D9D9D9",
            }}
            alt="Remy Sharp"
            src="https://img.freepik.com/free-photo/purple-osteospermum-daisy-flower_1373-16.jpg"
          />
        </Badge>
        <Box sx={{flex: 1}}>
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
      </Stack>

      <Divider variant="fullWidth" />

      {target !== "status" && (
        <>
          <Stack sx={{ flexDirection: "row", gap: "14px", marginTop: "21px" }}>
            <InputBlock sx={{ flex: "1" }} label="Discount code" />
            <ButtonBlock title="Apply" disabled={true} sx={{padding:"16px 17px"}}/>
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
            }}
          />

          <Divider variant="fullWidth" />
        </>
      )}

      <Stack sx={{ margin: "21px 0", gap: "11px" }}>
        <StyledFlexContainerRowCentered>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            Subtotal
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            $100.00
          </Typography>
        </StyledFlexContainerRowCentered>
        <StyledFlexContainerRowCentered>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            Shipping
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            $10.00
          </Typography>
        </StyledFlexContainerRowCentered>
        <StyledFlexContainerRowCentered>
          <Stack
            sx={{ flexDirection: "row", gap: "17px", alignItems: "center" }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
            >
              Discount
            </Typography>
            <Chip
              color="default"
              icon={
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_1_4478)">
                    <path
                      opacity="0.55"
                      d="M17.78 3.12829C17.45 2.48129 16.778 2.03829 16 2.03829H10.835C10.3 2.03829 9.78896 2.25229 9.41296 2.63129L2.59296 9.52129C2.59296 9.52329 2.59296 9.52429 2.59096 9.52429C2.34696 9.77729 2.17896 10.0783 2.09096 10.3983L0.739964 8.09329C0.179964 7.14029 0.499964 5.91529 1.45196 5.35629L9.82296 0.463288C10.283 0.193287 10.833 0.118288 11.35 0.258288L16.34 1.59529C17.095 1.79829 17.633 2.40929 17.78 3.12829Z"
                      fill="#737373"
                    />
                    <path
                      d="M10.8349 2.03833H15.9999C17.1049 2.03833 17.9999 2.93333 17.9999 4.03833V9.21033C17.9999 9.74033 17.7899 10.2503 17.4139 10.6243L10.5959 17.4423C9.81894 18.2203 8.55994 18.2243 7.77594 17.4523L2.60994 12.3523C1.82394 11.5773 1.81594 10.3123 2.58994 9.52433C2.59194 9.52433 2.59294 9.52433 2.59294 9.52233L9.41294 2.63233C9.78994 2.25233 10.2999 2.03833 10.8349 2.03833ZM13.4999 8.03833C14.3279 8.03833 14.9999 7.36633 14.9999 6.53833C14.9999 5.71033 14.3279 5.03833 13.4999 5.03833C12.6719 5.03833 11.9999 5.71033 11.9999 6.53833C11.9999 7.36633 12.6719 8.03833 13.4999 8.03833Z"
                      fill="#737373"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1_4478">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(0 0.0383301)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              }
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
        <StyledFlexContainerRowCentered>
          <Box sx={{ position: "relative" }}>
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "400",
                lineHeight: "21px",
                textDecoration: "underline",
              }}
            >
              Parcel insurance
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            $10.00
          </Typography>
        </StyledFlexContainerRowCentered>
        <StyledFlexContainerRowCentered>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            Taxes
          </Typography>
          <Typography
            sx={{ fontSize: "14px", fontWeight: "400", lineHeight: "21px" }}
          >
            $5.00
          </Typography>
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
