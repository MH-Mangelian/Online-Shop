'use client';
import {render} from '@test'
import Product from "@/components/products/Product";
import { getByAltText } from '@testing-library/react';

test('renders Product component correctly',()=>{
  render(<Product />);

  //render the product title
  const title = getByAltText('Product Some');
  expect(title).toBeInTheDocument();

  //check Button Add to Cart
  const addButton = getByAltText('Add to Cart');
  expect(addToCartButton).toBeInTheDocument();
})
