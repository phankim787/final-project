import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledOutputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
`;

const OutputLabel = styled.h2`
    font-size: calc(10px + 2vmin);
`;

const ErrorLabel = styled.h2`
    font-size: calc(10px + 2vmin);
    color: red;
`;

export default function Output({ calories, error }) {
    return (
        <StyledOutputWrapper>
            {error ? (
                <ErrorLabel>{error}</ErrorLabel>
            ) : (
                <OutputLabel>Total Calories: {calories}</OutputLabel>
            )}
        </StyledOutputWrapper>
    )
}

Output.propTypes = {
    calories: PropTypes.number,
    error: PropTypes.string.isRequired,
};
