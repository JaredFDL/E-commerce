import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CheckoutSteps from "../components/CheckoutSteps";
import { savePaymentMethod } from "../slices/cartSlice";

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { shippingAddress } = useSelector((state) => state.cart);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    navigate("/placeorder");
  };

  // not completed yet
  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [navigate, shippingAddress]);

  return (
    <>
      <CheckoutSteps step1 step2 step3 />
      <FormContainer>
        <h1 className="text-center">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label>Select Method</Form.Label>
            <Form.Select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option key={1} value="PayPal">
                PayPal
              </option>
              <option key={2} value="Credit Card">
                Credit Card
              </option>
            </Form.Select>
          </Form.Group>
          <Button
            className="mx-auto mt-5 d-flex align-items-center justify-content-center"
            type="submit"
            variant="dark"
          >
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Payment;
