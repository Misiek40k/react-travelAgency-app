import React from 'react';
import PropTypes from 'prop-types';

import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue, validateForm }) => {
  return (
    <div>
      <input
        type='text'
        className={`${styles.input} text`}
        value={currentValue}
        onChange={event => {
          setOptionValue(event.currentTarget.value);
          validateForm;
        }}
      >
      </input>
    </div>
  );
};

OrderOptionText.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
  validateForm: PropTypes.func,
};

export default OrderOptionText;
