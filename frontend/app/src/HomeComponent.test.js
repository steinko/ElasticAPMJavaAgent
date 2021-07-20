import { render, screen } from '@testing-library/react';
import {HomeComponent} from './HomeComponent'

it('should exist',() => {
  const wrapper = render(<HomeComponent/>)
  expect(wrapper).toBeTruthy()
})
