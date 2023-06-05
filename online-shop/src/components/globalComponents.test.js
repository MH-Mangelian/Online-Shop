'use client';
import {render, screen ,fireEvent} from "@testing-library/react";
import { useDispatch } from "react-redux";

//Components import :
import Banner from "./Banner";
import CartItem from "./CartItem";
import Header from "./Header";
import NavTopGreen from "./NavTopGreen";
import Search from "./Search";
import SearchForMobile from "./SearchForMobile";
import TextHeader from "./TextHeader";
import TextMobileHeader from "./TextMobileHeader";

//*******************_testing_******************:

//--------------Banner Component------------------------
test('renders Banner component correctly',()=>{
  render(<Banner />);

  //text Element 
  const text = screen.getByText(/Grab Upto 50% Off On Selected Headphone/i);
  expect(text).toBeInTheDocument();

  //Button Element
  const button = screen.getByRole('button',{name: /Buy Now/i});
  expect(button).toBeInDocument();

  //Image Element
  const bannerImage = screen.getByAltText('Banner');
  expect(bannerImage).toBeInTheDocument();
});

//-------------CartItem Component--------------------------------
//Alias values for testing
const mockId = 1;
const mockImg = 'path/to/image.jpg';
const mockTitle = 'Product Title';
const mockPrice = '$99.99';
const mockAmount = 3;
const mockText = 'Product description';

test('renders CartItem component correctly', () => {
  // quantification useDispatch method
  const dispatchMock = jest.fn();
  useDispatch.mockReturnValue(dispatchMock);

  // Render component with values
  render(
    <CartItem
      id={mockId}
      img={mockImg}
      title={mockTitle}
      price={mockPrice}
      amount={mockAmount}
      text={mockText}
    />
  );

  // Checking the expected elements and features in the component
  const imageElement = screen.getByAltText(mockText);
  expect(imageElement).toBeInTheDocument();

  const titleElement = screen.getByText(mockTitle);
  expect(titleElement).toBeInTheDocument();

  const priceElement = screen.getByText(mockPrice);
  expect(priceElement).toBeInTheDocument();

  const removeButton = screen.getByRole('button', { name: /Remove/i });
  expect(removeButton).toBeInTheDocument();
  fireEvent.click(removeButton); // test click Remove

  const increaseButton = screen.getByRole('button', { name: '+' });
  expect(increaseButton).toBeInTheDocument();
  fireEvent.click(increaseButton); // test click '+'

  const amountElement = screen.getByText(mockAmount.toString());
  expect(amountElement).toBeInTheDocument();

  const decreaseButton = screen.getByRole('button', { name: '-' });
  expect(decreaseButton).toBeInTheDocument();
  fireEvent.click(decreaseButton); // test click '-'

  // test useDispatch 
  expect(dispatchMock).toHaveBeenCalledTimes(3);
  expect(dispatchMock).toHaveBeenCalledWith(removeItem(mockId));
  expect(dispatchMock).toHaveBeenCalledWith(increase({ id: mockId }));
  expect(dispatchMock).toHaveBeenCalledWith(decrease({ id: mockId }));
});


//------------------Header Component --------------------------------
test('renders Header component correctly', () => {
  render(<Header />);

  // Test left icon & text side
  const onlineShopText = screen.getByText('Online Shop');
  expect(onlineShopText).toBeInTheDocument();

  // Test center icon side
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();

  // Test right icon side
  const accountLink = screen.getByRole('link', { name: 'account' });
  expect(accountLink).toBeInTheDocument();

  const cartLink = screen.getByRole('link', { name: 'Cart' });
  expect(cartLink).toBeInTheDocument();

  // Test hamburger menu
  const hamburgerMenuButton = screen.getByRole('button', { name: 'Open Menu' });
  expect(hamburgerMenuButton).toBeInTheDocument();
  fireEvent.click(hamburgerMenuButton); // Open menu

  const closeMenuButton = screen.getByRole('button', { name: 'Close Menu' });
  expect(closeMenuButton).toBeInTheDocument();
  fireEvent.click(closeMenuButton); // Close menu
});

//--------------NavTopGreen Component --------------------------------
test('renders NavTopGreen component correctly', () => {
  render(<NavTopGreen />);

  // Test left side
  const telephoneIcon = screen.getByRole('img', { name: 'Telephone' });
  expect(telephoneIcon).toBeInTheDocument();
  const telephoneNumber = screen.getByText('+989050000000');
  expect(telephoneNumber).toBeInTheDocument();

  // Test center side
  const shopIcon = screen.getByRole('img', { name: 'Shop' });
  expect(shopIcon).toBeInTheDocument();
  const shopText = screen.getByText('Get 50% Off on Selected Items');
  expect(shopText).toBeInTheDocument();
  const shopMenuLink = screen.getByText('Shop Menu');
  expect(shopMenuLink).toBeInTheDocument();

  // Test right side
  const egnSelect = screen.getByLabelText('Egn');
  expect(egnSelect).toBeInTheDocument();
  const locationSelect = screen.getByLabelText('Location');
  expect(locationSelect).toBeInTheDocument();
});


//-------------------- Search Component --------------------------------
test('renders Search component correctly', () => {
  render(<Search />);

  // Test input field
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();

  // Test button
  const searchButton = screen.getByRole('button');
  expect(searchButton).toBeInTheDocument();

  // Test search functionality
  fireEvent.change(searchInput, { target: { value: 'example' } });
  expect(searchInput.value).toBe('example');

  fireEvent.click(searchButton);
  // Add assertions for the expected search behavior
});


//-------------------------SearchForMobile component------------------------
test('renders SearchForMobile component correctly', () => {
  render(<SearchForMobile />);

  // Test input field
  const searchInput = screen.getByPlaceholderText('Search...');
  expect(searchInput).toBeInTheDocument();

  // Test button
  const searchButton = screen.getByRole('button');
  expect(searchButton).toBeInTheDocument();

  // Test search functionality
  fireEvent.change(searchInput, { target: { value: 'example' } });
  expect(searchInput.value).toBe('example');

  fireEvent.click(searchButton);
  // Add assertions for the expected search behavior
});


//--------------------- TextHeader component --------------------------------
test('renders TextHeader component correctly', () => {
  render(<TextHeader />);

  // Test category select
  const categorySelect = screen.getByLabelText('Categories');
  expect(categorySelect).toBeInTheDocument();

  // Test links
  const homeLink = screen.getByText('Home');
  const aboutUsLink = screen.getByText('AboutUs');
  const contactUsLink = screen.getByText('ContactUs');
  expect(homeLink).toBeInTheDocument();
  expect(aboutUsLink).toBeInTheDocument();
  expect(contactUsLink).toBeInTheDocument();
});


//------------------ TextMobileHeader component --------------------------------
test('renders TextMobileHeader component correctly', () => {
  render(<TextMobileHeader />);

  // Test category select
  const categorySelect = screen.getByLabelText('Categories');
  expect(categorySelect).toBeInTheDocument();

  // Test links
  const homeLink = screen.getByText('Home');
  const aboutUsLink = screen.getByText('AboutUs');
  const contactUsLink = screen.getByText('ContactUs');
  const cartLink = screen.getByText('Cart');
  const accountLink = screen.getByText('account');
  expect(homeLink).toBeInTheDocument();
  expect(aboutUsLink).toBeInTheDocument();
  expect(contactUsLink).toBeInTheDocument();
  expect(cartLink).toBeInTheDocument();
  expect(accountLink).toBeInTheDocument();
});
