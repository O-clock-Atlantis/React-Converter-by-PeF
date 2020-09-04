import React from 'react';
import PropTypes from 'prop-types';

import './currencies.scss';

const Currency = ({ name, rate, getInfos }) => (
  <li className="currency" data-currency={name} data-rate={rate} onClick={(e) => getInfos(e)}>{name}</li>
);

Currency.propTypes = {
  name: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  getInfos: PropTypes.func.isRequired,
};

export default Currency;
