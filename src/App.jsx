/**
 * App.jsx
 *
 * This is the root component of the Nutrition Calculator application.
 * It primarily renders the main structure of the application, delegating logic to custom hooks and components.
 *
 * Responsibilities:
 * - Render the main components of the app (Header, Input, Output, Footer).
 * - Use the `useNutritionCalculator` hook to manage application state and logic.
 *
 * Author: Pratham Shroff, pshroff@bu.edu
 */

import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";
import Footer from "./components/Footer.jsx";
import Loading from "./components/Loading.jsx";
import { createGlobalStyle } from 'styled-components';
import { useNutritionCalculator } from './useNutritionCalculator';

// Global styles applied to the entire app
const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
        background-color: #f4f4f9;
        color: #333;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }
`;

export default function App() {
    // Use the custom hook to manage state and logic
    const {
        calories,
        error,
        loading,
        buttonLabel,
        handleCalculate,
        handleReset,
    } = useNutritionCalculator();

    return (
        <>
            <GlobalStyle />
            <Header />
            <Input
                onCalculate={buttonLabel === 'Calculate' ? handleCalculate : handleReset}
                buttonLabel={buttonLabel}
            />
            {loading ? <Loading /> : <Output calories={calories} error={error} />}
            <Footer />
        </>
    );
}
