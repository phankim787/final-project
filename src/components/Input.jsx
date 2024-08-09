/**
 * Input.jsx
 *
 * This component handles user input for the Nutrition Calculator.
 * It includes the input field where users enter their ingredient, and the dynamic button (Calculate or Reset).
 *
 * Responsibilities:
 * - Manage the state of user input.
 * - Trigger the calculation or reset process when the form is submitted.
 * - Ensure the input form is responsive and accessible.
 *
 * Author: Pratham Shroff, pshroff@bu.edu
 */

import styled from 'styled-components';
import Button from './Button.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

// Wrapper for input and button, ensuring they are centered horizontally and positioned near the top
const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 60px;  /* Controls vertical position */
    width: 100%;
    padding: 0 20px;

    @media (max-width: 600px) {
        margin-top: 40px;
        padding: 0 10px;
    }
`;

// Styling for the input field
const StyledInput = styled.input`
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    max-width: 500px;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;

    &::placeholder {
        color: #aaa;
    }
`;

export default function Input({ onCalculate, buttonLabel }) {
    const [input, setInput] = useState(''); // State for managing user input

    // Handle form submission and trigger calculation or reset
    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(input);
        if (buttonLabel === 'Reset') setInput(''); // Clear input on reset
    };

    return (
        <StyledInputWrapper>
            <form onSubmit={handleSubmit}>
                <StyledInput
                    type="text"
                    placeholder="Enter the ingredient (e.g., '1 cup rice')"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit">{buttonLabel}</Button>
            </form>
        </StyledInputWrapper>
    );
}

Input.propTypes = {
    onCalculate: PropTypes.func.isRequired,
    buttonLabel: PropTypes.string.isRequired,
};
