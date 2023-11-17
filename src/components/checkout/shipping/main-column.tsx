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
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import ShippingMethod from "./shipping-method";
import CheckoutFooter from "../checkout-footer";
import ButtonBlock from "../../common/button-block";
import CustomSeparator from "../../common/Breadcrumb-block";
import { Text18 } from "../../common/text-block";
import MainColumnWrapper from "../../common/main-column-wrapper";
import { useNavigate } from "react-router-dom";

const StyledFlexContainerRowCentered = styled(Stack)({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });
  


export default function MainColumn() {
  const navigate = useNavigate()

  return (
    <MainColumnWrapper>
        <CustomSeparator />
        <Stack sx={{padding:"12px 16px" , gap:"12px" , border:"1px solid #D9D9D9" , borderRadius:"5px" , marginTop:"17px"}}>
          <StyledFlexContainerRowCentered>
            <Typography sx={{width:"70px"}}>Contact</Typography>
            <Typography sx={{flex:"1"}}>name@email.com</Typography>
            <ButtonBlock variant="text" title="Change" />
          </StyledFlexContainerRowCentered>
          <Divider variant="fullWidth" />
          <StyledFlexContainerRowCentered>
            <Typography sx={{width:"70px"}}>Ship to</Typography>
            <Typography sx={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "21px",
              color: "#333333",
              flex:"1"
              
            }}>151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada</Typography>
            <ButtonBlock variant="text" title="Change" />
          </StyledFlexContainerRowCentered>
        </Stack>


        <Stack sx={{marginTop:"34px"}}>
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


        <StyledFlexContainerRowCentered sx={{marginTop:"34px" , marginBottom:"77px"}}>
            <ButtonBlock variant="text" title="Return to information" onClick={() => navigate("/checkout/information")}/>
            <ButtonBlock title="Continue shopping" onClick={() => navigate("/checkout/payment")}/>
        </StyledFlexContainerRowCentered>


        <Divider variant="fullWidth" />

        <CheckoutFooter />

    </MainColumnWrapper>
  );
}
