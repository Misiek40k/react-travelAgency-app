import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './HappyHourAd.scss';

export default class HappyHourAd extends Component {

  static propTypes = {
    title: PropTypes.string,
    promoDescription: PropTypes.string,
  }

  render() {
    const { title, promoDescription } = this.props;

    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.promoDescription}>{promoDescription}</div>
      </div>
    );
  }
}
