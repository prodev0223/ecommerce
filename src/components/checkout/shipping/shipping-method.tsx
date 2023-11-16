import * as React from 'react';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import RadioGroup from '@mui/joy/RadioGroup';
import Radio from '@mui/joy/Radio';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import FormLabel from '@mui/joy/FormLabel';
import { StyledFlexContainerRowCentered } from '../../common/flex-container';
import Typography from "@mui/material/Typography";
import { FormHelperTextSX, Text14 } from '../../common/text-block';

export default function ShippingMethod() {
  return (
    <Sheet
      variant="outlined"
      sx={{
        boxShadow: 'sm',
        borderRadius: 'sm',
        p: 1,
      }}
    >
      <RadioGroup name="tiers" sx={{ gap: 1, '& > div': { p: 1 } }}>
        <FormControl sx={{ p: 2, flexDirection: 'row', gap: 2 }}>
          <Radio overlay value="1" />
          <StyledFlexContainerRowCentered sx={{alignItems:"flex-start" , width:"100%"}}>
            <div>
              <FormLabel>Eco-Friendly Carbon Offset Shipping 🍃</FormLabel>
              <FormHelperText sx={{...FormHelperTextSX}}>5 to 16 working days+ proccessing time, but you’ll feel better about your purchase</FormHelperText>
            </div>
            <Text14>$7.99</Text14>
          </StyledFlexContainerRowCentered>
        </FormControl>
        <Divider />
        <FormControl sx={{ p: 2, flexDirection: 'row', gap: 2 }}>
          <Radio overlay value="medium" />
          <StyledFlexContainerRowCentered sx={{alignItems:"flex-start" , width:"100%"}}>
            <div>
              <FormLabel>Complimentary Expedited Parcel</FormLabel>
              <FormHelperText sx={{...FormHelperTextSX}}>3 to 15 working days + proccessing time</FormHelperText>
            </div>
            <Text14>$0.00</Text14>
          </StyledFlexContainerRowCentered>
        </FormControl>
      </RadioGroup>
    </Sheet>
  );
}