"use client";

import React from 'react';

/**
 * AccessibleWrapper adds semantic HTML5 tags and ARIA roles for better accessibility.
 * Usage: Wrap sections or main content with this component.
 */
const AccessibleWrapper = ({ role = 'region', ariaLabel, as: Component = 'section', children }) => {
  return (
    <Component role={role} aria-label={ariaLabel} tabIndex={-1}>
      {children}
    </Component>
  );
};

export default AccessibleWrapper;
