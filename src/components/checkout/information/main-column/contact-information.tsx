import { Box, Stack } from "@mui/material";
import InputBlock from "../../../common/input-block";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { Text18 } from "../../../common/text-block";
import { FormikProps } from "formik";
import { IFormValues } from ".";

export default function ContactInformation({
  formik,
}: {
  formik: FormikProps<IFormValues>;
}) {
  return (
    <Box>
      <Text18 variant="h2" mb="14px">
        Contact Information
      </Text18>
      <Stack gap="14px">
        <InputBlock
          startIcon={<PhoneOutlinedIcon />}
          id="phone_number"
          name="phone_number"
          label="Phone number"
          fullWidth
          value={formik.values.phone_number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.phone_number && Boolean(formik.errors.phone_number)
          }
          helperText={formik.touched.phone_number && formik.errors.phone_number}
        />
        <InputBlock
          id="email"
          name="email"
          label="Email"
          fullWidth
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
      </Stack>
    </Box>
  );
}
