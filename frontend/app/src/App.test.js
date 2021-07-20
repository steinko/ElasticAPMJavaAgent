import { render, screen } from '@testing-library/react';
import App from './App';

 it('should exist',() => {
  const wrapper = render(<App/>)
  expect(wrapper).toBeTruthy()
})