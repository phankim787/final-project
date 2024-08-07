import styled from 'styled-components';

const StyledHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    font-size: calc(10px + 2vmin);
    background-color: lightcoral;
`
const Title = styled.h1`
    color: white;
`

export default function Header(){
    return(
        <StyledHeader>
            <Title> Nutrition Calculator </Title>
        </StyledHeader>
    )
}
