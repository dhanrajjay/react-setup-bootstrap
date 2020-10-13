import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PolicyType from './PolicyType';
import '@testing-library/jest-dom/extend-expect';
import * as i18n from '../i18n';

describe('Examining the PolicyType component', () => {

  test("checks for the PolicyType component ", () => {
    const { container } = render(<PolicyType t />);
    expect(container).not.toBeNull;
  });

  test("checks for the StepImage in the PolicyType component ", () => {
     const { container } = render(<PolicyType />);
     expect(container).not.toBeNull;
     const stepImage = container.querySelector('.stepimg');
     expect(stepImage).toBeInTheDocument();
  });

  test("checks for the Postal Code in the PolicyType component ", () => {
    function handleChange(evt) {
      evt.target.value = evt.target.value;
    };

    const { container } = render(<PolicyType />);
    expect(container).not.toBeNull;
    const inputTag = container.querySelector('input');
    expect(inputTag.value).toBe('m2m 2m2');
    fireEvent.change(inputTag, { target: { value: 'updated value' } });
    expect(inputTag.value).toBe('updated value');
  });

  test("checks for the Number of Drivers in the PolicyType component", () => {
    const { container } = render(<PolicyType />);
    expect(container).not.toBeNull;
    const inputTag = container.querySelector('input');
    expect(inputTag.value).toBe('m2m 2m2');
    fireEvent.change(inputTag, { target: { value: 'updated value' } });
    expect(inputTag.value).toBe('updated value');
  });

  test("checks for the Number of Drivers in the PolicyType component", () => {
    const { container, getByText } = render(<PolicyType />);
    expect(container).not.toBeNull();
    const hmeBtn = container.querySelector('[value=home]');
    const autoBtn = container.querySelector('[value=car]');
    fireEvent.click(hmeBtn);
    expect(hmeBtn).toHaveTextContent('Home');
    const homeType = getByText('HOME TYPE');
    expect(homeType).toBeInTheDocument();
    fireEvent.click(autoBtn);
    expect(autoBtn).toHaveTextContent('Auto');
    const noOfVehicles = getByText('NUMBER OF VEHICLES');
    const noOfDrivers = getByText('NUMBER OF DRIVERS');
    expect(noOfDrivers).toBeInTheDocument();
    expect(noOfVehicles).toBeInTheDocument();
  });

  test("checks for the Number of Drivers in the PolicyType component, when combined savings is clicked", () => {
    const { container, getByText } = render(<PolicyType />);
    expect(container).not.toBeNull();
    const bothBtn = container.querySelector('[value=both]');
    fireEvent.click(bothBtn);
    expect(bothBtn).toHaveTextContent('Combined for more savings');
    const noOfVehicles = getByText('NUMBER OF VEHICLES');
    const noOfDrivers = getByText('NUMBER OF DRIVERS');
    expect(noOfDrivers).toBeInTheDocument();
    expect(noOfVehicles).toBeInTheDocument();
   });

  test("checks for the Save Money Image in the PolicyType component ", () => {
    const { container } = render(<PolicyType />);
    expect(container).not.toBeNull;
    const stepImage = container.querySelector('.savemoneyimg');
    expect(stepImage).toBeInTheDocument();
  });
});