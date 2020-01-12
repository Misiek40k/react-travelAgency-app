import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';
import { formatPrice } from '../../../utils/formatPrice';
import { calculateTotal } from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import Button from '../../common/Button/Button';

// import styles from './OrderForm.scss';

const validateForm = (options, tripCost, tripName, tripCountry, tripId) => {
  const textInputs = document.querySelectorAll('.text');
  const isValid = Array.from(textInputs).every(input => input.value !== '');

  isValid ? sendOrder(options, tripCost, tripName, tripCountry, tripId) : console.log('Form is invalid');
};

const sendOrder = (options, tripCost, tripName, tripCountry, tripId) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripCountry,
    tripId,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function (response) {
      return response.json();
    }).then(function (parsedResponse) {
      console.log('parsedResponse', parsedResponse);
    });
};

const OrderForm = ({ options, tripCost, setOrderOption, tripName, tripCountry, tripId }) => {
  return (
    <Grid>
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption} validateForm={validateForm} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} />
          <Button onClick={() => validateForm(options, tripCost, tripName, tripCountry, tripId)}>Order now!</Button>
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCountry: PropTypes.string,
};

export default OrderForm;


