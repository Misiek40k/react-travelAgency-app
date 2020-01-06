import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import styles from './OrderOption.scss';

const OrderOptionDate = ({ setOptionValue, currentValue }) => {
  return (<DatePicker
    className={styles.input}
    dateFormat='dd/MM/yyyy'
    selected={currentValue}
    onChange={setOptionValue}
  />
  );
};

OrderOptionDate.propTypes = {
  currentValue: PropTypes.any,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;
