/**
 * Header.jsx
 *
 * This component is responsible for rendering the header of the Nutrition Calculator.
 * It includes the title of the app and applies responsive styles to ensure it looks good on all screen sizes.
 *
 * Responsibilities:
 * - Display the app title.
 * - Apply responsive styling to the header.
 *
 * Author: Phan Kim
 */

import styled from 'styled-components';

// Styled component for the header wrapper
const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: auto;
    padding: 20px;
    background-color: #6200ea;
    color: white;
    margin: 10px;

    @media (min-width: 600px) {
        padding: 40px;
    }
`;

// Responsive title styling
const Title = styled.h1`
    margin: 0;
    font-size: calc(1.5rem + 1vw); /* Responsive font size */
    text-align: center;
`;

export default function Header() {
    return (
        <StyledHeader>
            <Title>Nutrition Calculator</Title>
        </StyledHeader>
    );
}
