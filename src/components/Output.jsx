/**
 * Output.jsx
 *
 * This component displays the results of the calculation, including total calories or error messages.
 * It ensures the output is styled and positioned correctly based on the content type (calories vs. error).
 *
 * Responsibilities:
 * - Display calorie output or error message based on the calculation result.
 * - Ensure error messages are smaller and more compact to fit on smaller screens.
 *
 * Author: Pratham Shroff, pshroff@bu.edu
 */

import styled from "styled-components";
import PropTypes from 'prop-types';

// Wrapper for output, ensuring it's positioned below the button with adequate spacing
const StyledOutputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;  /* Controls space between the button and output */
    padding: 0 20px;
    text-align: center;

    @media (max-width: 600px) {
        padding: 0 10px;
    }
`;

// Styling for calorie output label
const OutputLabel = styled.h2`
    font-size: 1.5rem;
    color: #333;
`;

// Smaller, more compact error label for better readability on smaller screens
const ErrorLabel = styled.h2`
    font-size: 1rem;  /* Smaller font size for error messages */
    color: #b00020;
    line-height: 1.2;
`;

export default function Output({ calories, error }) {
    return (
        <StyledOutputWrapper>
            {error ? (
                <ErrorLabel>{error}</ErrorLabel>  // Display error message if there's an error
            ) : (
                calories !== null && <OutputLabel>Total Calories: {calories}</OutputLabel>  // Display calories if available
            )}
        </StyledOutputWrapper>
    );
}

Output.propTypes = {
    calories: PropTypes.number,
    error: PropTypes.string.isRequired,
};
