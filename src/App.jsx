/**
 * App.jsx
 *
 * This is the root component of the Nutrition Calculator application.
 * It manages the state of the application, including calories, error messages, and loading state.
 * It also handles the main logic for making API requests to fetch nutritional data.
 *
 * Responsibilities:
 * - Fetch data from the API based on user input.
 * - Manage global state (calories, error, loading).
 * - Render the main components of the app (Header, Input, Output, Footer).
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
    // State management for calories, error messages, and loading indicator
    const [calories, setCalories] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Function to handle the calculation process
    const handleCalculate = async (input) => {
        setLoading(true); // Show loading indicator while fetching data
        try {
            const data = await getNutritionData(input);

            // If the API returns zero calories or no nutrient data, show an error message
            if (data.calories === 0 || !data.totalNutrients) {
                setError('We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantity for the ingredients.');
                setCalories(null);
            } else {
                // If valid data is returned, update the state
                setCalories(data.calories);
                setError('');
            }
        } catch (err) {
            // Handle any errors during the API request
            setError('Error fetching data. Please try again!');
            setCalories(null);
        } finally {
            // Hide the loading indicator after the process is complete
            setLoading(false);
        }
    };

    return (
        <>
            <GlobalStyle />
            <Header />
            <Input onCalculate={handleCalculate} />
            {loading ? <p>Loading...</p> : <Output calories={calories} error={error} />}
            <Footer />
        </>
    );
}
