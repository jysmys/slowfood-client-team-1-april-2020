import React, { Component } from "react";
import {
  injectStripe,
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
} from "react-stripe-elements";
import { Button, Label } from "semantic-ui-react";
import Axios from "axios";

class PaymentForm extends Component {
  payWithStripe = async () => {
    await this.props.stripe.createToken().then((response) => {
      if (response.token) {
        try {
          this.performPayment(response.token);
        } catch {
          console.error();
        }
      }
    });
  };
  async performPayment(token) {
    let orderResponse = await Axios.put(
      `http://localhost:3000/api/orders/${this.props.orderDetails.id}`,
      { activity: "finalized", stripeToken: token }
    );
    if (orderResponse.data.paid === true) {
      this.props.finalizedOrder(orderResponse.data.message);
    } else {
      debugger;
    }
  }

  render() {
    return (
      <>
        <h1>the payment form</h1>
        <Label>Card Number</Label>
        <CardNumberElement />
        <Label>Expiry Date</Label>
        <CardExpiryElement />
        <Label>CVC</Label>
        <CardCVCElement />
        <Button onClick={this.payWithStripe}>Submit</Button>
      </>
    );
  }
}
export default injectStripe(PaymentForm);
