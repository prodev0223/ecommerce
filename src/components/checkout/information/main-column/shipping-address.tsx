
import {
    Box,
    Grid,
  } from "@mui/material";
import InputBlock from "../../../common/input-block";
import SelectBlock from "../../../common/select-block";
import { Text18 } from "../../../common/text-block";
import CheckboxBlock from "../../../common/checkbox-block";

export default function ShippingAddress() {
    return(
        <Box mb={{xs:"17px" , md:"228px"}} mt="29px">
          <Text18
            variant="h2"
            mb= "14px"   
          >
            Shipping Address
          </Text18>
          <Grid container spacing={2} mb="8px">
            <Grid item xs={12} md={6}>
              <InputBlock sx={{ width: "100%" }} label="First name" />
            </Grid>
            <Grid item xs={12} md={6}>
              <InputBlock sx={{ width: "100%" }} label="Last name" />
            </Grid>
            <Grid item xs={12}>
              <InputBlock sx={{ width: "100%" }} label="Address" />
            </Grid>
            <Grid item xs={12}>
              <InputBlock
                sx={{ width: "100%" }}
                label="Apartment, suite, etc.(optional)"
              />
            </Grid>
            <Grid item xs={12}>
              <InputBlock sx={{ width: "100%" }} label="City" />
            </Grid>
            <Grid item xs={12} md={4}>
              <SelectBlock label="State/Province" />
            </Grid>
            <Grid item xs={12} md={4}>
              <SelectBlock label="Country" />
            </Grid>
            <Grid item xs={12} md={4}>
              <InputBlock sx={{ width: "100%" }} label="Zip/Postal code" />
            </Grid>
          </Grid>

          <CheckboxBlock label="Use a different billing address"/>

        </Box>
    )
}