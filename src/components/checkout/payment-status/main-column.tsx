import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Avatar,
  Badge,
  Box,
  Button,
  Chip,
  Divider,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Input,
  List,
  ListItem,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ButtonBlock from "../../common/button-block";
import CustomSeparator from "../../common/Breadcrumb-block";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import InputBlock from "../../common/input-block";
import CheckoutFooter from "../checkout-footer";

import { ReactComponent as PendingPaymentIcon } from "../../../assets/images/icons/pending-payment.svg";
import { ReactComponent as CheckmarkIcon } from "../../../assets/images/icons/checkmark.svg";
import { Text14, Text18 } from "../../common/text-block";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import TrackingInformation from "./tracking-information";
import MainColumnWrapper from "../../common/main-column-wrapper";
import { useParams } from 'react-router-dom';
import MapCard from "./map-card";





const StyledFlexContainerRowCentered = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});

export default function MainColumn({status , mapCardData}:{status:string , mapCardData: Record<string, {title: string , description: string , icon: React.ReactElement}>}) {


  return (
    <MainColumnWrapper>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
          position: "relative",
          left: "-79px",
        }}
      >
        <Box sx={{ width: "64px", height: "64px" , display:"flex" , alignItems:"center" , justifyContent:"flex-end" }}>
          {mapCardData[status].icon}
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "21px",
              color: "#545454",
            }}
          >
            Order #DQFDHG5E0
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "27px",
              color: "#333333",
            }}
          >
            {status === "cancelled" ?"John Smith, we have bad news." : "Thank you John Smith!"}
          </Typography>
        </Box>
      </Stack>

      <MapCard title={mapCardData[status].title} description= {mapCardData[status].description} />

      <Paper variant="outlined" sx={{ padding: "14px" }}>
        <Text18 sx={{ marginBottom: "14px" }}>Customer information</Text18>

        <Grid container spacing={"14px"}>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Contact information</Text14>
              <Text14 sx={{ color: "#545454" }}>name@example.com</Text14>
            </Stack>
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Shipping address</Text14>
              <Text14 sx={{ color: "#545454" }}>
                John Smith 151 O’Connor St Ground floor Ottawa ON K2P 2L8 Canada
              </Text14>
            </Stack>
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Shipping method</Text14>
              <Text14 sx={{ color: "#545454" }}>
                Canada Post Expedited Parcel
              </Text14>
            </Stack>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Payment method</Text14>
              <Text14 sx={{ color: "#545454" }}>
                ending with 4242 - $336.80
              </Text14>
            </Stack>
            <Stack sx={{ gap: "7px" }}>
              <Text14 sx={{ color: "#000" }}>Billing Address</Text14>
              <Text14 sx={{ color: "#545454" }}>
                John Smith 151 O’Connor St Ground floor Ottawa ON K2P 2L8 Canada
              </Text14>
            </Stack>
          </Grid>
        </Grid>
      </Paper>

      <StyledFlexContainerRowCentered
        sx={{ marginTop: "34px", marginBottom: "77px" }}
      >
        <ButtonBlock variant="text" title="Return to information" />
        <ButtonBlock title="Continue shopping" />
      </StyledFlexContainerRowCentered>

      <Divider variant="fullWidth" />

      <CheckoutFooter />
    </MainColumnWrapper>
  );
}
