import { useNavigate } from "react-router-dom";
import ButtonBlock from "../common/button-block";
import { StyledFlexContainerRowCentered } from "../common/flex-container";
import { Stack, styled } from "@mui/material";

const StyledStack =  styled(Stack)({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  });


export default function CheckoutHeader() {
    const navigate = useNavigate()
    return (
        <StyledFlexContainerRowCentered sx={{marginTop:"34px" , marginBottom:"77px" , flexDirection:{xs:"column-reverse" , sm:"row"} }}>
            <ButtonBlock variant="text" title="Return to information" onClick={() => navigate("/checkout/information")} sx={{width:{xs:"100%" , sm:"fit-content"}}}/>
            <ButtonBlock title="Continue shopping" onClick={() => navigate("/checkout/payment")} sx={{width:{xs:"100%" , sm:"fit-content"}}}/>
        </StyledFlexContainerRowCentered>

    )
}