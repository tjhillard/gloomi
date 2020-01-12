import React from 'react';

export function GloomScoreResults({ latitude, longitude, gloomScore }) {
  return (
    <div className="results">
      {gloomScore && (
        <>
          <span>
            Gloom Score™ for{' '}
            <a
              href={`https://www.openstreetmap.org/#map=14/${latitude},${longitude}`}
              target="_blank"
            >
              ({latitude.toFixed(2)}, {longitude.toFixed(2)})
            </a>
            :
          </span>
          <strong>{gloomScore}</strong>
        </>
      )}
    </div>
  );
}
