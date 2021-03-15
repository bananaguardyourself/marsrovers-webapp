import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router';

jest.mock('../pages/Rovers/Rovers', () => ({
  Rovers: () => <>Rovers</>,
}));

test('shoud render App component', () => {

  // Act
  render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);

  // Assert
  expect(screen.getByText('Rovers')).toBeInTheDocument();
});
