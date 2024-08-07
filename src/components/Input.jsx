import styled from 'styled-components';
import Button from './Button.jsx';
import {useState, useEffect} from 'react';



const StyledInput = styled.input`
    margin: 0;
    font-family: Calibri;
`

const CalcButton = styled(Button)`
    background-color: mediumpurple;
`

//grab data from api
export default function Input() {
    const [ingredients, setIngredients] = useState([]);



    return(
        <>
            <StyledInput> Please enter your ingredients: </StyledInput>
            <form onSubmit={onSubmit}>


            </form>


            <CalcButton>Calculate</CalcButton>
        </>
    )

}