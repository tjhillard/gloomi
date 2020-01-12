import React from 'react';
import { ExternalLink } from './external-link';

export function GloomScoreResults({ latitude, longitude, gloomScore }) {
  return (
    <div className="results">
      {gloomScore && (
        <>
          <span>
            Gloom Score™ for{' '}
            <ExternalLink
              href={`https://www.openstreetmap.org/#map=14/${latitude}/${longitude}`}
              target="_blank"
            >
              ({latitude.toFixed(2)}, {longitude.toFixed(2)})
            </ExternalLink>
            :
          </span>
          <strong>{gloomScore}</strong>
          <span>(higher the gloomier)</span>
        </>
      )}
    </div>
  );
}
