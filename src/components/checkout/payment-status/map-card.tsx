import {
  Box,
  Chip,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Input,
  List,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ButtonBlock from "../../common/button-block";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TrackingInformation from "./tracking-information";



const StyledFlexContainerRowCentered = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});


interface IMapCardProps {
    title: string
    description: string
    status?: string
}


export default function MapCard({title , description , status}:IMapCardProps) {
    return (
        <Paper variant="outlined" sx={{ margin: "33px 0" }}>
        <Box
          sx={{
            width: "572px",
            height: "202px",
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
            frameBorder="0"
            style={{ border: 0, width: "100%", height: "100%" }}
            // allowFullScreen=""
            aria-hidden="false"
            // tabIndex="0"
          />
        </Box>
        <Stack sx={{ gap: "8px", padding: "14px" }}>
          <Typography
            sx={{
              fontSize: "18px",
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
           {description}
          </Typography>

          <ButtonBlock title="Continue Shopping" />
          <ButtonBlock title="Contact Support" />
        </Stack>

        {status === "confirmed" && <Stack
          sx={{ gap: "8px", padding: "14px", borderTop: "1px solid #D9D9D9" }}
        >
          <StyledFlexContainerRowCentered>
            <Typography
              sx={{
                fontSize: "18px",
              }}
            >
              Tracking information
            </Typography>

            <Chip
              color="primary"
              icon={<LocalShippingOutlinedIcon />}
              label="In transit"
              variant="outlined"
              sx={{
                borderRadius: "100px",
                padding: "3px 9.6px",
                ".MuiChip-icon": {
                  marginLeft: "0",
                },
              }}
            />
          </StyledFlexContainerRowCentered>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            Your tracking information will appear here when your order is
            confirmed. This normally takes 1-3 business days. If the status of
            your order has not changed in 7 business days, do not hesitate to
            contact our 24/7 customer support team{" "}
            <a href="mailto:support@penthousesupply.com" target="_blank">
              here
            </a>{" "}
            or by replying to this email..
          </Typography>

          <TrackingInformation />

          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography>Tracking number:</Typography>
            <Typography>112122121221</Typography>
          </Box>
        </Stack>}
      </Paper>
    )
}