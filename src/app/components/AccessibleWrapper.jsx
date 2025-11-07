"use client";

import React from 'react';

const AccessibleWrapper = ({ role = 'region', ariaLabel, as: Component = 'section', children }) => {
  return (
    <Component role={role} aria-label={ariaLabel} tabIndex={-1}>
      {children}
    </Component>
  );
};

export default AccessibleWrapper;
