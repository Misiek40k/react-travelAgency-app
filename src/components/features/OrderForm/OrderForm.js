import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import pricing from '../../../data/pricing.json';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';

// import styles from './OrderForm.scss';

const OrderForm = ({ options, tripCost }) => {
  return (
    <Grid>
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id}>
            <OrderOption {...option} />
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} />
        </Col>
      </Row>
    </Grid>
  );
};

OrderForm.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderForm;


