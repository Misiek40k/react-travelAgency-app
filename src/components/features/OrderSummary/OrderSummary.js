import React from 'react';
import PropTypes from 'prop-types';
import { calculateTotal } from '../../../utils/calculateTotal';
import { formatPrice } from '../../../utils/formatPrice';

import styles from './OrderSummary.scss';

const OrderSummary = ({ tripCost, options }) => {
  return (
    <h2 className={styles.component}>Total:
      <strong>{calculateTotal(formatPrice(tripCost), options)}</strong>
    </h2>);
};

OrderSummary.propTypes = {
  options: PropTypes.object,
  tripCost: PropTypes.string,
};

export default OrderSummary;
