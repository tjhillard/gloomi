import React from 'react';

export function Button({ children, isLoading, ...attrs }) {
  return (
    <button disabled={isLoading} {...attrs}>
      {isLoading ? 'Loading...' : children}
    </button>
  );
}
