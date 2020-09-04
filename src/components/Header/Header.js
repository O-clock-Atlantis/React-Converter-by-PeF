import React from 'react';
import PropTypes from 'prop-types';

import './header.scss';

const Header = ({ amount, filterList }) => (
  <header className="header">
    <h1 className="header-title">Converter</h1>
    <span className="header-amount">{amount} euro</span>
    <div>
      <input
        type="text"
        className="header-search"
        placeholder="Rechercher une devise"
        onKeyUp={(e) => filterList(e)}
      />
    </div>
  </header>
);

Header.propTypes = {
  amount: PropTypes.number.isRequired,
  filterList: PropTypes.func.isRequired,
};

export default Header;
