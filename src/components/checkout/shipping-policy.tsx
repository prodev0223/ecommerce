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
  maxHeight: "80vh",
  overflow: "auto",
};

export default function ShippingPolicyModal({}) {
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
              Shipping Policy
            </Typography>
            <IconButton>
              <CloseIcon />
            </IconButton>
          </StyledFlexContainerRowCentered>
          <Divider variant="fullWidth" />
          <Stack sx={{ gap: "14px" , marginTop:"16px" }}>
            <Box>
              <Text18>
                <strong>Processing time</strong>
              </Text18>
              <Text18>
                All orders are processed within 1–7 business days of receiving
                your payment. Once your order is confirmed, you will be notified
                and receive a tracking number. Read more details below. Orders
                are not processed or shipped from Friday, 12 pm EST through
                Sunday, or holidays.
              </Text18>
              <Text18>
                If we are experiencing a high volume of orders, shipments may be
                delayed by a few days. If your shipment experiences a
                significant delay, we will contact you via email or phone.
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>Shipping rates and delivery estimates</strong>
              </Text18>
              <Text18>
                Shipping charges for your order will be calculated and displayed
                at checkout. We offer free standard shipping on all orders.
                <br />
                <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                  <li>Shipping option</li>
                  <li>Estimated delivery time</li>
                  <li>Price</li>
                  <li>Complimentary Expedited Parcel</li>
                  <li>8 to 16 business days</li>
                  <li>FREE($0.00)</li>
                  <li>Eco-Friendly Carbon Offset Shipping 🍃</li>
                  <li>9 to 20 business days</li>
                  <li>$7.99</li>
                </ul>
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>Shipment to P.O. boxes or APO/FPO addresses</strong>
              </Text18>
              <Text18>
                We do not ship to PO Boxes or APO/FPO addresses. Your order will
                be cancelled and refunded if you provide one during checkout
                with the exception of the insurance and any shipping fee due to
                our automated
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>Shipment Confirmation and Order Tracking</strong>
              </Text18>

              <Text18>
                You will receive a Shipment Confirmation email with your
                tracking number once your order has been confirmed. The tracking
                number may take 5-7 business days to display movement
                information, but this is not a reason to worry, your order is in
                good hands. If your tracking number has not displayed an update
                in 10 business days, contact our 24/7 customer support team and
                we will launch an investigation.
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>How to track your order</strong>
              </Text18>

              <Text18>
                When you eagerly await the arrival of your package, having a
                reliable and convenient tracking system is crucial. One popular
                platform that provides comprehensive tracking services is
                17track.net. In this guide, we will walk you through the
                step-by-step process of tracking your packages using
                17track.net, ensuring you stay informed about the whereabouts of
                your shipments.
                <ol>
                  <li>
                    Step 1: Access the 17track.net Website Open your preferred
                    web browser and navigate to the 17track.net website. You can
                    do this by typing "17track.net" into the address bar and
                    hitting Enter.
                  </li>
                  <li>
                    Step 2: Enter the Tracking Number Locate your tracking
                    number, which is usually provided to you by the sender or
                    can be found on your shipping confirmation email. On the
                    17track.net homepage, you will find a search bar. Enter your
                    tracking number into this field.
                  </li>
                  <li>
                    Step 3: Select the Carrier (Optional) If you know the
                    specific carrier used for your shipment, you can select it
                    from the drop-down menu next to the search bar. This step is
                    optional but can help improve tracking accuracy and provide
                    more detailed information. If you're unsure about the
                    carrier, you can leave this field blank.
                  </li>
                  <li>
                    Step 4: Initiate the Tracking Process Click on the "Track"
                    button or hit Enter to initiate the tracking process.
                    17track.net will start searching for the relevant tracking
                    information associated with your package.
                  </li>
                  <li>
                    Step 5: Review the Tracking Results Once the tracking
                    process is complete, you will be presented with the tracking
                    results. This includes the current status of your package,
                    its location, and any relevant updates. You may also see
                    details such as estimated delivery dates, shipment history,
                    and the path your package has taken.
                  </li>
                  <li>
                    Step 6: Explore Additional Features 17track.net offers
                    various additional features to enhance your tracking
                    experience. These include options to subscribe to email or
                    SMS notifications for tracking updates, a map view to
                    visually track the progress of your package, and the ability
                    to save and manage multiple tracking numbers in your
                    account.
                  </li>
                  <li>
                    Step 7: Troubleshooting and Support If you encounter any
                    issues with tracking your package or have questions
                    regarding the tracking process, 17track.net provides
                    comprehensive support options. You can access the Help
                    Center on their website, which offers frequently asked
                    questions, troubleshooting guides, and contact information
                    for their customer support team.
                  </li>
                  <li>
                    Step 8: Share Your Tracking Results If you need to share the
                    tracking information with others, 17track.net provides easy
                    ways to do so. You can copy the tracking link or use the
                    social media sharing buttons to send the details to friends,
                    family, or colleagues. Tracking your packages with
                    17track.net is a straightforward process that keeps you
                    informed about your shipments every step of the way. Whether
                    you're waiting for an important document, a special gift, or
                    a long-awaited purchase, using 17track.net ensures that you
                    have the information you need to plan and anticipate the
                    arrival of your package.
                  </li>
                </ol>
                Remember to regularly check the tracking status for any updates,
                as the information provided can change as your package makes its
                way to you. Enjoy the convenience of 17track.net's tracking
                services and have peace of mind knowing the whereabouts of your
                packages at all times. Disclaimer: Please note that 17track.net
                is a third-party tracking service, and any issues or inquiries
                regarding tracking results should be directed to their support
                team. Customs, Duties, and Taxes We are not responsible for any
                customs and taxes applied to your order. All fees imposed during
                or after shipping are the customer’s responsibility (including
                tariffs, taxes, and other costs).
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>Damages</strong>
              </Text18>
              <Text18>
                The merchant is not liable for any products damaged or lost
                during shipping. If you received your order damaged, please file
                a claim with the shipment carrier. Save all packaging materials
                and damaged goods before filing a claim.
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>International Shipping Policy</strong>
              </Text18>
              <Text18>
                We offer international shipping to a wide range of countries
                across the globe. If, during the checkout process, you do not
                find your country listed among the available shipping
                destinations, kindly note that we do not currently provide
                shipping services to that specific country. Consequently, we
                regret to inform you that we will be unable to process your
                order for delivery to such a location. We reserve the right to
                modify this policy and our list of shipping destinations at our
                discretion, with the ability to make changes at any given time.
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>
                  Incorrect Shipping Addresses and Refused Delivery
                </strong>
              </Text18>
              <Text18>
                We diligently strive to maintain a high standard of service in
                regard to our shipping policies. In our efforts to ensure a
                smooth and successful delivery process, we make every attempt to
                validate the shipping address provided during the checkout
                process, verifying its recognition as a valid destination by the
                selected shipping carrier for your order.
                <br />
                <br />
                In the event that the shipping address cannot be validated, our
                commitment to customer satisfaction leads us to reach out to the
                customer, seeking an updated and accurate address. If, despite
                our efforts, we are unable to secure an updated address,
                regrettably, we will be left with no option but to cancel the
                order and provide a full refund.
                <br />
                <br />
                It is important to note that we will not be held liable if, due
                to an incorrect shipping address provided by the customer, the
                package is lost, and we are unable to recover it. In such cases,
                the responsibility for providing accurate shipping information
                lies with the customer.
                <br />
                <br />
                In cases where a package is returned to our fulfillment center,
                and a resend fee is applicable, it's essential to note that the
                fee may vary, ranging from $10.00 to $50.00. We will offer the
                customer the option to pay this fee if they wish to have their
                order resent.
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>Missing or Stolen Shipments</strong>
              </Text18>
              <Text18>
                If you didn't receive your order, but the shipping carrier has
                reported that it was delivered, please let us know as soon as
                possible: Contact support button on any order notification email
                we sent, your order status page, or the footer of the website.
                We will file a claim with the shipping carrier. Local law
                enforcement will be involved. We will replace or refund your
                order when the investigation is complete. Allow up to 21 days
                for the investigation. How do I check the status of my order?
                <br />
                When your order is confirmed, you will receive an email
                notification from us which will include a tracking number you
                can use to check its status. Please allow 48 hours for the
                tracking information to become available. If you haven’t
                received your order within 25 business days of receiving your
                shipping confirmation email, please contact us at
                support@email.com with your name and order number, and we will
                look into it for you.
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>Refunds, returns, and exchanges</strong>
              </Text18>
              <Text18>
                ALL SALES ARE FINAL. NO RETURNS OR EXCHANGES. You may read the
                full details of when we will provide a refund or replacement in
                the Refund/Return Policy.
              </Text18>
            </Box>

            <Box>
              <Text18>
                <strong>
                  What constitutes a business day, and what excludes one
                </strong>
              </Text18>
              <Text18>
                Business days, which usually encompass Monday through Friday,
                are the standard working days during a typical week. These days
                are characterized by the operation of government offices and
                most private sector businesses, enabling the conduct of regular
                business activities, transactions, and official operations. It's
                important to understand that national holidays, whether in
                China, the United States, the United Kingdom, Canada, the
                Netherlands, or other countries, are exceptions to this
                standard. During these holidays, government offices and many
                businesses close, and routine business operations are
                temporarily halted, making them non-business days. Consequently,
                business days exclude these national holidays and weekends, with
                the expectation that regular work and business-related matters
                will resume on the next available business day. “Working day” is
                used synonymously with “business day”. If you have any further
                questions, please don't hesitate to contact our 24/7 Customer
                support team.
              </Text18>
            </Box>
          </Stack>

          <Stack
            sx={{ width: "100%", alignItems: "flex-end", marginTop: "16px" }}
          >
            <ButtonBlock title="I have read and agreed to the shipping policy" />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
