/**
 * App.jsx
 *
 * This is the root component of the Nutrition Calculator application.
 * It manages the state of the application, including calories, error messages, loading state, and button label.
 * It also handles the main logic for making API requests to fetch nutritional data.
 *
 * Responsibilities:
 * - Fetch data from the API based on user input.
 * - Manage global state (calories, error, loading, button label).
 * - Render the main components of the app (Header, Input, Output, Footer).
 * - Handle reset functionality to return to the initial state.
 *
 * Author: Pratham Shroff, pshroff@bu.edu
 */

import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";
import Footer from "./components/Footer.jsx";
import { useState } from "react";
import { createGlobalStyle } from 'styled-components';
import { getNutritionData } from './api';

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
    // State management for calories, error messages, loading indicator, and button label
    const [calories, setCalories] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Calculate');

    // Function to handle the calculation process
    const handleCalculate = async (input) => {
        setLoading(true); // Show loading indicator while fetching data
        try {
            const data = await getNutritionData(input);

            // Use optional chaining to safely access totalNutrients
            if (data.calories === 0 || !data?.totalNutrients) {
                setError('We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantity for the ingredients.');
                setCalories(null);
            } else {
                // If valid data is returned, update the state
                setCalories(data.calories);
                setError('');
            }
            // Switch the button label to 'Reset' after displaying result
            setButtonLabel('Reset');
        } catch (err) {
            // Handle any errors during the API request
            setError('Error fetching data. Please try again!');
            setCalories(null);
            // Switch the button label to 'Reset' in case of an error
            setButtonLabel('Reset');
        } finally {
            // Hide the loading indicator after the process is complete
            setLoading(false);
        }
    };

    // Function to reset the form to its initial state
    const handleReset = () => {
        setCalories(null);
        setError('');
        setButtonLabel('Calculate');
    };

    return (
        <>
            <GlobalStyle />
            <Header />
            <Input
                onCalculate={buttonLabel === 'Calculate' ? handleCalculate : handleReset}
                buttonLabel={buttonLabel}
            />
            {loading ? <p>Loading...</p> : <Output calories={calories} error={error} />}
            <Footer />
        </>
    );
}
