import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyledFlexContainerRowCentered } from "../common/flex-container";
import { Divider, IconButton, Stack, Link } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBlock from "../common/button-block";
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

const Text16 = styled(Typography)({
  fontSize: "16px",
  fontWeight: "600",
  lineHeight: "19px",
});

export default function QualityGuaranteeModal({
  activeModal,
  handleCloseModal,
}: IModalProps) {
  return (
    <div>
      <Modal
        open={activeModal.open && activeModal.type === "quality-guarantee"}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledFlexContainerRowCentered sx={{ paddingBottom: "16px" }}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              fontWeight={700}
            >
              QUALITY <span style={{ color: "#449FDC" }}>GUARANTEE</span>
            </Typography>
            <IconButton onClick={handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </StyledFlexContainerRowCentered>
          <Divider variant="fullWidth" />
          <Stack sx={{ gap: "14px", marginTop: "16px", textAlign: "center" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "10px",
                fontWeight: "400",
                lineHeight: "15px",
                color: "#4E4E4E",
              }}
            >
              Find details in the{" "}
              <Link sx={{ color: "#000AFF", cursor: "pointer" }}>
                Refund/Return policy
              </Link>
              . To claim quality guarantee,{" "}
              <span style={{ fontWeight: "700" }}>
                report within 24 hours of delivery
              </span>
            </Typography>

            <Text16>
              We have complete confidence in the quality of our products and
              firmly believe that you will be more than delighted with your
              purchase.
            </Text16>

            <Text16>
              However, we understand that sometimes things may not go as
              planned.
            </Text16>

            <Text16>
              That's why we offer our amazing{" "}
              <span style={{ color: "#449FDC" }}>
                “We messed up? Get blessed up” guarantee
              </span>
              .
            </Text16>

            <Text16>
              So, no need to worry, simply contact support and provide pictures
              of our short comings.
            </Text16>

            <Text16>
              After our QC team reviews your claim, we’ll send a free
              replacement(and might even give you some store credit for your
              troubles).
            </Text16>

            <Text16>
              In the rare event that the replacement also exhibits a
              shortcoming, and the QC team agrees, we will give you the choice
              of giving us another chance or requesting a full refund.
            </Text16>

            <Text16>
              If you choose the refund, we'll promptly process a refund for the
              full purchase price, which will be promptly credited back to your
              original payment method. Your satisfaction is our utmost priority,
              and we'll ensure that you're a happy customer!We have complete
              confidence in the quality of our products and firmly believe that
              you will be more than delighted with your purchase.
            </Text16>

            <Text16>
              However, we understand that sometimes things may not go as
              planned.
            </Text16>

            <Text16>
              That's why we offer our amazing “We messed up? Get blessed up”
              guarantee.
            </Text16>

            <Text16>
              So, no need to worry, simply contact support and provide pictures
              of our short comings.
            </Text16>

            <Text16>
              After our QC team reviews your claim, we’ll send a free
              replacement(and might even give you some store credit for your
              troubles).
            </Text16>

            <Text16>
              In the rare event that the replacement also exhibits a
              shortcoming, and the QC team agrees, we will give you the choice
              of giving us another chance or requesting a full refund.
            </Text16>

            <Text16>
              If you choose the refund, we'll promptly process a refund for the
              full purchase price, which will be promptly credited back to your
              original payment method. Your satisfaction is our utmost priority,
              and we'll ensure that you're a happy customer!
            </Text16>
          </Stack>

          <Stack
            sx={{ width: "100%", alignItems: { xs: "center", md: "flex-end" }, marginTop: "16px" }}
          >
            <ButtonBlock title="Show me the full Refund/Return Policy" bgcolor="#449FDC" />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
