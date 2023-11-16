import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StyledFlexContainerRowCentered } from "../common/flex-container";
import { Divider, IconButton, Stack } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ButtonBlock from "../common/button-block";
import { Text18 } from "../common/text-block";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: "none",
  p: "16px",
  width: { md: "1110px" },
  borderRadius: "12px",
};

export default function RefundPolicyModal({}) {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StyledFlexContainerRowCentered sx={{ paddingBottom: "16px" }}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Refund/Return policy
            </Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </StyledFlexContainerRowCentered>
          <Divider variant="fullWidth" />
          <Stack sx={{ gap: "14px" }}>
            <Text18
              sx={{ fontWeight: "600", color: "#000", marginTop: "16px" }}
            >
              ALL SALES ARE FINAL. NO RETURNS OR EXCHANGES.
            </Text18>

            <Text18>
              <strong>
                If a product you've purchased becomes unavailable or is sold
                out,
              </strong>
              we'll refund the value to your store credit or balance. Should you
              prefer a refund to your original payment method in this situation,
              our customer support team will be happy to assist you. Please
              don't hesitate to get in touch with us if you have any questions
              or requests.
            </Text18>

            <Text18>
              <strong>
                If your order has been accurately fulfilled by us,
              </strong>
              but you discover that you've chosen the wrong size or made an
              error on your part, please note that we are unable to provide
              refunds or accept returns in such cases. We kindly request your
              understanding and attention to detail when placing your order.
            </Text18>

            <Text18>
              <strong>
                QUALITY <span style={{ color: "#449FDC" }}>GUARANTEE</span>:
              </strong>
            </Text18>
            <Text18>
              <strong>
                If you receive a a product with visible imperfections or
                defects, damaged, or it falls short of its description
              </strong>
              you should submit evidence to our customer support team or your
              sales associate. Your claim and supporting evidence will then be
              carefully reviewed by our third-party Quality Control (QC) team.
            </Text18>
            <Text18>
              <strong>If our QC team finds in your favor</strong> we will send
              you a <strong>replacement</strong> a no extra cost to you. In the
              rare event that the replacement also exhibits a significant
              shortcoming, and the evidence you provide aligns with the findings
              of our third-party QC team, you'll have the option to select
              either another replacement or a <strong>full refund,</strong>
              based on your preference.
            </Text18>
          </Stack>

          <Stack
            sx={{ width: "100%", alignItems: "flex-end", marginTop: "16px" }}
          >
            <ButtonBlock title="I have read and agreed to the refund policy" />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
