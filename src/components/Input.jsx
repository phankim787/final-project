import styled from 'styled-components';
import Button from './Button.jsx';
import { useState } from 'react';
import PropTypes from 'prop-types';

const StyledInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const StyledInput = styled.input`
    margin: 10px 0;
    padding: 5px;
    font-family: Calibri, serif;
    font-size: 1rem;
`;

export default function Input({ onCalculate }) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onCalculate(input);
    };

    return (
        <StyledInputWrapper>
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter your ingredients:
                    <StyledInput
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </label>
                <Button type="submit">Calculate</Button>
            </form>
        </StyledInputWrapper>
    )
}

Input.propTypes = {
    onCalculate: PropTypes.func.isRequired,
};
