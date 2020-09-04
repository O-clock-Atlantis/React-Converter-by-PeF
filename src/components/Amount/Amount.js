import React from 'react';
import PropTypes from 'prop-types';
import './amount.scss';

const Amount = ({ currency, amount }) => (
  <div className="amount">
    <p className="amount-converted">
      {
        (Math.round(amount * 100) / 100)
          .toString()
          .replace('.', ',')
      }
    </p>
    <p className="amount-currency">{currency}</p>
  </div>
);

Amount.propTypes = {
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default Amount;
