import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';

import OrderSummary from '../OrderSummary/OrderSummary';

// import styles from './OrderForm.scss';

const OrderForm = ({ options, tripCost }) => {
  return (
    <Grid>
      <Row>
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


