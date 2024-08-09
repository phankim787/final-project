/**
 * Footer.jsx
 *
 * This component renders the footer of the application, which includes a copyright notice.
 * It ensures that the footer is always positioned at the bottom of the page.
 *
 * Responsibilities:
 * - Display a simple, centered copyright message.
 * - Ensure the footer is fixed to the bottom of the viewport.
 *
 * Author: Pratham Shrpff, pshroff@bu.edu
 */

import styled from 'styled-components';

// Styled component for the footer
const StyledFooter = styled.footer`
    text-align: center;
    padding: 10px;
    background-color: #6200ea;
    color: white;
    margin-top: auto;
    font-size: 0.8rem;
`;

export default function Footer() {
    return (
        <StyledFooter>
            &copy; {new Date().getFullYear()} Nutrition Calculator. All rights reserved.
        </StyledFooter>
    );
}
