import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyledFlexContainerRowCentered } from "../common/flex-container";
import { Divider, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBlock from "../common/button-block";
import { Text18 } from "../common/text-block";
import { IModalProps } from "../../types";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: "none",
  p: "16px",
  width: { xs: "375px", md: "1110px" },
  borderRadius: "12px",
  maxHeight: "80vh",
  overflow: "auto",
};

export default function PrivacyPolicyModal({
  activeModal,
  handleCloseModal,
}: IModalProps) {
  return (
    <div>
      <Modal
        open={activeModal.open && activeModal.type === "privacy-policy"}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledFlexContainerRowCentered pb="16px">
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Privacy policy
            </Typography>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </StyledFlexContainerRowCentered>
          <Divider variant="fullWidth" />
          <Stack gap="14px" mt="16px">
            <Text18>
              <strong>1. Information We Collect:</strong>
            </Text18>
            <Text18>
              We may collect the following types of personal information from
              you:
              <br />
              Contact Information: Name, email address, phone number, and
              mailing address.
              <br />
              Payment Information: Credit card details, billing address, and
              other payment-related information.
              <br />
              Order Details: Information related to your orders, including
              products purchased and transaction history.
              <br />
              User Account Information: Username, password, and other
              account-related details.
            </Text18>

            <Text18>
              <strong>2. How We Use Your Information:</strong>
            </Text18>
            <Text18>
              We use the collected information for the following purposes:
              <br />
              To process and fulfill your orders.
              <br />
              To communicate with you about your orders, account, and
              promotions.
              <br />
              To provide customer support and address your inquiries.
              <br />
              To improve and customize our services, website, and user
              experience.
              <br />
              To analyze and understand user preferences and trends.
              <br />
              To prevent fraudulent activities and enhance security.
              <br />
              To comply with legal obligations.
            </Text18>

            <Text18>
              <strong>3. Disclosure of Your Information:</strong>
            </Text18>
            <Text18>
              We may share your personal information with third parties in the
              following circumstances:
              <br />
              Service Providers: We may share your information with trusted
              third-party service providers who assist us in operating our
              business and delivering services to you.
              <br />
              Legal Compliance: We may disclose your information when required
              by law, regulation, legal process, or governmental request.
              <br />
              Business Transfers: In the event of a merger, acquisition, or sale
              of assets, your information may be transferred to the acquiring
              company.
              <br />
              Consent: We may share your information with third parties when you
              provide us with explicit consent.
            </Text18>
            <Text18>
              <strong>4. Data Security:</strong>
            </Text18>
            <Text18>
              We take reasonable measures to protect your personal information
              from unauthorized access, alteration, disclosure, or destruction.
              However, no method of data transmission over the internet or
              electronic storage is completely secure. We cannot guarantee the
              absolute security of your information.
            </Text18>
            <Text18>
              <strong>5. Your Choices:</strong>
            </Text18>

            <Text18>
              You can update your account information by logging into your
              account on our website.
              <br />
              You can opt-out of receiving promotional communications from us by
              following the unsubscribe instructions provided in the
              communication.
              <br />
              You can manage cookies and other tracking technologies through
              your browser settings.
            </Text18>
            <Text18>
              <strong>6. Children's Privacy:</strong>
            </Text18>
            <Text18>
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us to have the
              information removed.
            </Text18>
            <Text18>
              <strong>7. Changes to this Privacy Policy:</strong>
            </Text18>
            <Text18>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on our website with a revised effective date. We
              encourage you to review the policy periodically.
            </Text18>
          </Stack>

          <Stack
          alignItems={{ xs: "center", md: "flex-end"}}
          mt="16px"
          width="100%"
          >
            <ButtonBlock title="I have read and agreed to the privacy policy"  bgcolor="#449FDC" />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
