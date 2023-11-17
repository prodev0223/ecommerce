
import {
    Box,
    Grid,
    Typography,
  } from "@mui/material";
import InputBlock from "../../../common/input-block";
import SelectBlock from "../../../common/select-block";

export default function ShippingAddress() {
    return(
        <Box sx={{ marginBottom: "228px", marginTop: "29px" }}>
          <Typography
            variant="h2"
            sx={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "27px",
              marginBottom: "14px",
            }}
          >
            Shipping Address
          </Typography>
          <Grid container spacing={2}>
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
        </Box>
    )
}