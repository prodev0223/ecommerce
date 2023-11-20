import { Box, Typography, Divider, styled } from "@mui/material";
import { StyledFlexContainerRowCentered } from "../../../common/flex-container";
import CheckoutFooter from "../../checkout-footer";
import BreadcrumbBlock from "../../../common/Breadcrumb-block";
import ButtonBlock from "../../../common/button-block";
import { useNavigate } from "react-router-dom";
import MainColumnWrapper from "../../../common/main-column-wrapper";
import ExpressCheckout from "./express-checkout";
import ContactInformation from "./contact-information";
import ShippingAddress from "./shipping-address";
import { useFormik, FormikProps } from "formik";
import * as yup from "yup";



const HorizontalLine = styled(Box)({
  height: "1px",
  width: "100%",
  flex: "1",
  background: "#D9D9D9",
});





export interface IFormValues {
  phone_number: string;
  email: string;
  first_name: string;
  last_name: string;
  address: string;
  state: string;
  country: string;
  zip: string;
}

const validationSchema = yup.object({
  phone_number: yup.string().required("Phone number is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  first_name: yup
    .string()
    .required("First name is required"),
  last_name: yup
    .string()
    .required("Last name is required"),
    address: yup
    .string()
    .required("Address is required"),
  state: yup
    .string()
    .required("State is required"),
  country: yup
    .string()
    .required("Country is required"),
  zip: yup
    .number()
    .required("Zip/Postal code is required"),
});

const initialValues = {
  phone_number: "",
  email: "",
  first_name: "",
  last_name: "",
  address:"",
  state: "",
  country: "",
  zip: "",
}


export default function MainColumn() {
  const navigate = useNavigate();

  const formik: FormikProps<IFormValues> = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values:IFormValues) => {
      alert(JSON.stringify(values, null, 2));
    },
  });


  return (
    <MainColumnWrapper>
      <BreadcrumbBlock />
      <ExpressCheckout />

      <StyledFlexContainerRowCentered m="14px 0">
        <HorizontalLine />
        <Typography p="0 14px">Or</Typography>
        <HorizontalLine />
      </StyledFlexContainerRowCentered>

      <form onSubmit={formik.handleSubmit}>
      <ContactInformation formik={formik}/>
      <ShippingAddress formik={formik}/>

      <StyledFlexContainerRowCentered
        flexDirection={{ xs: "column-reverse", sm: "row" }}
        mt="34px"
        mb={{ xs: "17px", md: "77px" }}
        gap={{ xs: "5px", md: "0" }}
      >
        <ButtonBlock
          variant="text"
          title="Return to cart"
          onClick={() => navigate("/cart")}
          sx={{ width: { xs: "100%", sm: "fit-content" } , color:"#449FDC" }}
        />
        <ButtonBlock
          title="Continue shopping"
          bgcolor="#449FDC"
          onClick={() => navigate("/checkout/shipping")}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        />
      </StyledFlexContainerRowCentered>
      </form>

      <Divider variant="fullWidth" />

      <CheckoutFooter />
    </MainColumnWrapper>
  );
}
