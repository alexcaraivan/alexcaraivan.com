import React from 'react';
import Twitter from './Twitter';

const Components = {
  twitter: Twitter,
};

const DynamicIcon = ({ type }) => {
  if (typeof Components[type] !== 'undefined') {
    const Component = Components[type];
    return <Component />;
  }
  return null;
};

export default DynamicIcon;
