import { Box, Grid } from "@mui/material";
import InputBlock from "../../../common/input-block";
import SelectBlock from "../../../common/select-block";
import { Text18 } from "../../../common/text-block";
import CheckboxBlock from "../../../common/checkbox-block";
import { FormikProps } from "formik";
import { IFormValues } from ".";

export default function ShippingAddress({formik}:{formik:FormikProps<IFormValues>}) {

  return (
    <Box mt="29px">
      <Text18 variant="h2" mb="14px">
        Shipping Address
      </Text18>
        <Grid container spacing={2} mb="8px">
          <Grid item xs={12} md={6}>
            <InputBlock
              id="first_name"
              name="first_name"
              label="First name"
              fullWidth
              value={formik.values.first_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.first_name && Boolean(formik.errors.first_name)}
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <InputBlock
              id="last_name"
              name="last_name"
              label="Last name"
              fullWidth
              value={formik.values.last_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.last_name && Boolean(formik.errors.last_name)}
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
          </Grid>
          <Grid item xs={12}>
            <InputBlock
              id="address"
              name="address"
              fullWidth
              label="Address"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12}>
            <InputBlock
              fullWidth
              label="Apartment, suite, etc.(optional)"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12}>
            <InputBlock
              fullWidth
              label="City"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              // error={formik.touched.email && Boolean(formik.errors.email)}
              // helperText={formik.touched.email && formik.errors.email}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectBlock label="State/Province" />
          </Grid>
          <Grid item xs={12} md={4}>
            <SelectBlock label="Country" />
          </Grid>
          <Grid item xs={12} md={4}>
            <InputBlock 
            id="zip"
            name="zip"
            sx={{ width: "100%" }} label="Zip/Postal code"
            value={formik.values.zip}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.zip && Boolean(formik.errors.zip)}
            helperText={formik.touched.zip && formik.errors.zip}
            />
          </Grid>
        </Grid>

      <CheckboxBlock label="Use a different billing address" />
    </Box>
  );
}
