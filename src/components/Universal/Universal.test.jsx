import React from 'react';
import { render, screen } from '@testing-library/react';

import { Thumbnail, Title } from './Universal.component';

test('thumbnail was alt', () => {
  const props = {
    src: 'src',
    alt: 'alt testing text',
  };

  const element = render(<Thumbnail {...props}></Thumbnail>);

  element.getByAltText('alt testing text');
});

test('title is rendering', () => {
  const props = { content: 'test' };

  const element = render(<Title>{props.content}</Title>);

  element.getByText(props.content);
});
