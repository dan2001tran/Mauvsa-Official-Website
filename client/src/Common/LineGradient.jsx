import React from 'react';
import './LineGradient.css';

const LineGradient = ({ width = '100%', height = '2px' }) => {
  return <div className={`line-gradient`} style={{ width, height }} />;
};

export default LineGradient;
