import React from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

import './currencies.scss';

const Currencies = ({ currencies, getInfos/* currencyHeight */ }) => (
  <main className="currencies">
    <h2 className="currencies-title">Currencies</h2>
    <ul
      className="currencies-list"
      // style={
      // { height: { currencyHeight } }
      // }
    >
      {currencies.map((currency) => (
        <Currency
          key={currency.name}
          {...currency}
          getInfos={getInfos}
        />
      ))}
    </ul>
  </main>
);

Currencies.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  }).isRequired).isRequired,
  getInfos: PropTypes.func.isRequired,
};

export default Currencies;
