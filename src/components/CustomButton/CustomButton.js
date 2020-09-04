import React from 'react';
import PropTypes from 'prop-types';

import './custombutton.scss';

const CustomButton = ({ open, manageClick }) => {
  let className = 'custom-button';
  // eslint-disable-next-line no-unused-expressions
  open ? className += ' custom-button--open' : '';
  return (
    <button className={className} type="button" onClick={manageClick}>=</button>
  );
};

CustomButton.propTypes = {
  open: PropTypes.bool.isRequired,
  manageClick: PropTypes.func.isRequired,
};
export default CustomButton;
