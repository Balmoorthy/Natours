/* eslint-disable no-undef */
import axios from 'axios';
import { showAlert } from './alerts';

const stripe = Stripe(
  'pk_test_51QB0JyGm8ZVma49Kv7Jotiv547O3yDgpOlAVtIwUi6XCvMWWCmNadr8RSTcfvKewCiF7enMcak4WFHrWxVIXFD1u00UkVoF8uE',
);

export const bookTour = async (tourId) => {
  // 1) Get checkout session from API
  try {
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);
    // 2) create checkout form + chance credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id,
    });
  } catch (error) {
    showAlert('error', error);
  }
};
