import { renderOrderSummary } from './checkout/orderSummary.js';
import { renderPaymentSummary } from './checkout/paymentSummary.js';
import { renderCheckOutHeader } from './checkout/checkoutHeader.js';
// import '../data/cart-class.js';
import '../data/backend-practice.js';

renderCheckOutHeader();
renderOrderSummary();
renderPaymentSummary();