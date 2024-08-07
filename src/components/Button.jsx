import styled from 'styled-components';

const StyledButton = styled.button`
    background-color: mediumpurple;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 10px;
`;

export default function Button({ onClick, children }) {
    return (
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
    );
}
