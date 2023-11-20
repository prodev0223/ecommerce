import {
  Box,
  Divider,
  Stack,
  styled,
} from "@mui/material";
import ButtonBlock from "../../../common/button-block";
import CheckoutFooter from "../../checkout-footer";
import { Text14, Text18 } from "../../../common/text-block";
import MainColumnWrapper from "../../../common/main-column-wrapper";
import MapCard from "./map-card";
import CustomerInformation from "./customer-information";


const StyledFlexContainerRowCentered = styled(Stack)({
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
});


const StatusIconWrapper = styled(Box)({
  width: "64px", height: "64px" , display:"flex" , alignItems:"center" , justifyContent:"flex-end" 
})


export default function MainColumn({status , mapCardData}:{status:string , mapCardData: Record<string, {title: string , description: string , icon: React.ReactElement}>}) {


  return (
    <MainColumnWrapper>
      <Stack
        sx={{
          flexDirection: "row",
          alignItems: "center",
          gap: "15px",
          position: "relative",
          left: {xs:"0",md:"-79px"},
        }}
      >
        <StatusIconWrapper>
          {mapCardData[status].icon}
        </StatusIconWrapper>
        <Box>
          <Text14
            sx={{
              color: "#545454",
            }}
          >
            Order #DQFDHG5E0
          </Text14>
          <Text18
            sx={{
              color: "#333333",
            }}
          >
            {status === "cancelled" ?"John Smith, we have bad news." : "Thank you John Smith!"}
          </Text18>
        </Box>
      </Stack>

      <MapCard title={mapCardData[status].title} description= {mapCardData[status].description} status={status} />

      <CustomerInformation />

      <StyledFlexContainerRowCentered
        sx={{ marginTop: "34px", marginBottom: "77px" , flexDirection:{xs:"column-reverse" , sm:"row"}  }}
      >
        <ButtonBlock variant="text" title="Need help?" sx={{width:{xs:"100%" , sm:"fit-content"}}}/>
        <ButtonBlock title="Continue shopping" sx={{width:{xs:"100%" , sm:"fit-content"}}}/>
      </StyledFlexContainerRowCentered>

      <Divider variant="fullWidth" />

      <CheckoutFooter />
    </MainColumnWrapper>
  );
}
