import React from 'react';

const Button = ({ type, value, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;