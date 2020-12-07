'use strict';

import getHighlights from './highlightSearch';
import generatePhoto from './generatePhoto';

const highlights = getHighlights(
  'new test',
  'TEst New',
);

// eslint-disable-next-line no-console
console.log('highlights', highlights);

generatePhoto();
