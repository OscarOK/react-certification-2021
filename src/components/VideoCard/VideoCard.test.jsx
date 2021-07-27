import React from 'react';
import { render, screen } from '@testing-library/react';

import VideoCard from './VideoCard.component';

test('video card is rendering', () => {
  const props = {
    title: 'Simple title',
    description: 'lorem some lorem text for lorem intentions.',
    thumbnail: {
      url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
    },
  };

  const element = render(<VideoCard {...props}></VideoCard>);

  element.getByText('Simple title');
  element.getByText('lorem some lorem text for lorem intentions.');
});
