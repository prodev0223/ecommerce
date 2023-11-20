import React from "react";
import ButtonBlock from "../common/button-block";
import { StyledFlexContainerRowCentered } from "../common/flex-container";
import ShippingPolicyModal from "./shipping-policy";
import RefundPolicyModal from "./refund-policy";
import PrivacyPolicyModal from "./privacy-policy";
import QualityGuaranteeModal from "./quality-guarantee";
import {ReactComponent as QualityGuaranteeIcon} from '../../assets/images/layout/quality-guarantee.svg'
import { IconButton } from "@mui/material";

export interface IActiveModal {
  type: string;
  open: boolean;
}

export default function CheckoutFooter() {
  const [activeModal, setactiveModal] = React.useState<IActiveModal>({
    type: "refund-policy",
    open: false,
  });

  const handleOpenModal = (type: string) =>
    setactiveModal({ type, open: true });
  const handleCloseModal = () => setactiveModal({ type: "", open: false });

  return (
    <>
      <StyledFlexContainerRowCentered
        p="17px 0"
        marginBottom={{ xs: "0px", md: "500px" }}
      >
        <IconButton
          disableRipple
          onClick={() => handleOpenModal("quality-guarantee")}
        >
          <QualityGuaranteeIcon />
        </IconButton>

        <ButtonBlock
          variant="text"
          title="Refund Policy"
          onClick={() => handleOpenModal("refund-policy")}
        />
        <ButtonBlock
          variant="text"
          title="Shipping Policy"
          onClick={() => handleOpenModal("shipping-policy")}
        />
        <ButtonBlock
          variant="text"
          title="Privacy Policy"
          onClick={() => handleOpenModal("privacy-policy")}
        />
      </StyledFlexContainerRowCentered>

      <RefundPolicyModal
        activeModal={activeModal}
        handleCloseModal={handleCloseModal}
      />
      <ShippingPolicyModal
        activeModal={activeModal}
        handleCloseModal={handleCloseModal}
      />
      <PrivacyPolicyModal
        activeModal={activeModal}
        handleCloseModal={handleCloseModal}
      />
      <QualityGuaranteeModal
        activeModal={activeModal}
        handleCloseModal={handleCloseModal}
      />
    </>
  );
}
