import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ContactForm from './ContactForm';

test('ContactForm accepts inputs', () => {
    render(<ContactForm />);
//In my test I want to:
//type into all 4 inputs
const firstNameInput = screen.getByLabelText(/first name*/i);
const lastNameInput = screen.getByLabelText(/last name*/i);
const emailInput = screen.getByLabelText(/email*/i);
const messageInput = screen.getByLabelText(/message/i);

fireEvent.change(firstNameInput, { target: { value:'Bob' } });
fireEvent.change(lastNameInput, { target: { value: 'Hansard' } });
fireEvent.change(emailInput, { target: { value: 'hailey@me.com' } });
fireEvent.change(messageInput, { target: { value: 'Testing the message area' } });
})

//click submit button
//assert that my info is showing up on the browser