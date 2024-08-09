/**
 * Button.jsx
 *
 * This component renders a styled button used across the Nutrition Calculator application.
 * It applies consistent styles and transitions to the button, ensuring a cohesive look and feel.
 * The button is reusable and can be customized for different actions.
 *
 * Responsibilities:
 * - Render a button with a consistent style.
 * - Handle user interactions such as hover effects.
 *
 * Author: Pratham Shroff, pshroff@bu.edu
 */

import styled from 'styled-components';
import PropTypes from 'prop-types';

// Styled component for the button, including hover effects and transitions
const StyledButton = styled.button`
  background-color: #03dac6;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;  // Smooth transition for hover effect

  &:hover {
    background-color: #018786;  // Darken the button on hover for better visual feedback
  }
`;

export default function Button({ onClick, children }) {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}

// PropTypes to ensure the button receives the correct props
// (not having this was causing an error)
Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
};
