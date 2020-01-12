import React from 'react';

export function ExternalLink({ children, ...attrs }) {
  return (
    <a target="_blank" rel="noopener noreferrer" {...attrs}>
      {children}
    </a>
  );
}
