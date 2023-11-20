import { Divider, Stack, Typography , Box } from "@mui/material";
import ButtonBlock from "../../../common/button-block";
import Payment from "./payment";
import BillingAddress from "./billing-address";
import CheckoutFooter from "../../checkout-footer";
import { Text14, Text18 } from "../../../common/text-block";
import MainColumnWrapper from "../../../common/main-column-wrapper";
import AddTip from "./add-tip";
import BreadcrumbBlock from "../../../common/Breadcrumb-block";
import { StyledFlexContainerRowCentered } from "../../../common/flex-container";
import { useNavigate } from "react-router-dom";
import { useFormik, FormikProps } from "formik";
import * as yup from "yup";

export interface IFormValues {
  card_number: string
  name: string
  expire_date: string
  security_code: string
}


const validationSchema = yup.object({
  card_number: yup
  .number()
  .required("Card number is required"),
  name: yup
  .string()
  .required("Name is required"),
  expire_date: yup
    .string()
    .required("Expire Date is required"),
    security_code: yup
    .number()
    .required("Security code is required"),
});



const initialValues = {
  card_number: "",
  name: "",
  expire_date: "",
  security_code: "",
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
      <Stack
        p="12px 16px"
        mt="17px"
        gap="12px"
        border="1px solid #D9D9D9"
        borderRadius="5px"
      >
        <StyledFlexContainerRowCentered>
          <Typography width="70px">Contact</Typography>
          <Typography sx={{ flex: "1" }}>name@email.com</Typography>
          <ButtonBlock variant="text" title="Change" sx={{padding:"0"}} />
        </StyledFlexContainerRowCentered>
        <Divider variant="fullWidth" />
        <StyledFlexContainerRowCentered>
          <Typography width="70px">Ship to</Typography>
          <Text14
            sx={{
              color: "#333333",
              flex: "1",
            }}
          >
            151 O’Connor St Ground floor, Ottawa ON K2P 2L8, Canada
          </Text14>
          <ButtonBlock variant="text" title="Change" sx={{padding:"0"}}/>
        </StyledFlexContainerRowCentered>

        <Divider variant="fullWidth" />
        <StyledFlexContainerRowCentered>
          <Typography width="70px">Method</Typography>
          <Box sx={{flex: "1",}}>
          <Text14
            sx={{
              color: "#333333"
            }}
            >
            Canada Post Expedited Parcel · $10.00
          </Text14>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "400",
              lineHeight: "18px",
              color: "#737373",
              flex: "1",
            }}
            >
            1 to 7 business days
          </Typography>
          </Box>
          <ButtonBlock variant="text" title="Change" sx={{padding:"0"}}/>
        </StyledFlexContainerRowCentered>
      </Stack>

      <Stack sx={{ marginTop: "34px" }}>
        <Text18
          variant="h2"
          mb="14px"
        >
          Add tip
        </Text18>
        <AddTip />
      </Stack>

      <Stack sx={{ marginTop: "34px" }}>
        <Text18
          variant="h2"
          mb="14px"
        >
          Payment
        </Text18>
        <Payment formik={formik} />
      </Stack>

      <Stack mt="34px">
        <Text18
          variant="h2"
        >
          Billing Address
        </Text18>

        <Text14 mb="14px" sx={{ color: "#545454"}}>
          Select the address that matches your card of payment method.
        </Text14>
        <BillingAddress />
      </Stack>

      <StyledFlexContainerRowCentered
         flexDirection={{ xs: "column-reverse", sm: "row" }}
         mt="34px"
         mb={{ xs: "17px", md: "77px" }}
         gap={{ xs: "5px", md: "0" }}
      >
        <ButtonBlock
          variant="text"
          title="Return to shipping"
          onClick={() => navigate("/checkout/shipping")}
          sx={{ width: { xs: "100%", sm: "fit-content" } ,  color:"#449FDC" }}
        />
        <ButtonBlock
          title="Continue shopping"
          bgcolor="#449FDC"
          onClick={() => navigate("/checkout/order/status/pending")}
          sx={{ width: { xs: "100%", sm: "fit-content" } }}
        />
      </StyledFlexContainerRowCentered>

      <Divider variant="fullWidth" />

      <CheckoutFooter />
    </MainColumnWrapper>
  );
}
