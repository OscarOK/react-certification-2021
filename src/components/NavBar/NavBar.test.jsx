import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar.component';

test('navbar is rendering', async () => {
  const element = render(
    <BrowserRouter>
      <NavBar></NavBar>
    </BrowserRouter>
  );

  expect(element.getByText('mement')).toBeInTheDocument();
  expect(element.getByText(/dark mode/i)).toBeInTheDocument();
  expect(element.getByText(/login/i)).toBeInTheDocument();
  expect(element.getByPlaceholderText(/search/i)).toBeInTheDocument();
});
