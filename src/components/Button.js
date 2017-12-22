import React from 'react';

const Button = ({ selected, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      style={{
        background: selected && 'blue',
        color: selected && '#fff'
      }}>
      {children}
    </button>
  );
};

export default Button;
