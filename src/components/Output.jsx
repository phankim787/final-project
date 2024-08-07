import styled from "styled-components";
import Input from "../components/Input";


const StyledOutputWrapper = styled.div`    
    display: flex;
    flex-direction: column;
    align-items: center;
    
`

const OutputLabel = styled.h2`
    font-size: calc(10px + 2vmin);
`


// 2 outputs..? Calorie Output or Error Output

export default function Output({calories}){
    return(
        <StyledOutputWrapper>
            <OutputLabel> Total Calories: ${calories} </OutputLabel>
        </StyledOutputWrapper>
    )

}