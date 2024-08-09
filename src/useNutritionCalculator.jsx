/**
 * useNutritionCalculator.jsx
 *
 * This custom hook handles the logic for fetching nutritional data, managing state,
 * and handling errors in the Nutrition Calculator application.
 *
 * Responsibilities:
 * - Fetch nutritional data from the API.
 * - Manage state for calories, errors, loading, and button label.
 * - Provide a reset function to clear the state and reset the input.
 *
 * Author: Pratham Shroff, pshroff@bu.edu
 */

import { useState } from 'react';
import { getNutritionData } from './api';

export const useNutritionCalculator = () => {
    const [calories, setCalories] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [buttonLabel, setButtonLabel] = useState('Calculate');

    const handleCalculate = async (input) => {
        setLoading(true);
        try {
            const data = await getNutritionData(input);

            if (data.calories === 0 || !data?.totalNutrients) {
                setError('We cannot calculate the nutrition for some ingredients. Please check the ingredient spelling or if you have entered a quantity for the ingredients.');
                setCalories(null);
            } else {
                setCalories(data.calories);
                setError('');
            }
            setButtonLabel('Reset');
        } catch (err) {
            setError('Error fetching data. Please try again!');
            setCalories(null);
            setButtonLabel('Reset');
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setCalories(null);
        setError('');
        setButtonLabel('Calculate');
    };

    return {
        calories,
        error,
        loading,
        buttonLabel,
        handleCalculate,
        handleReset,
    };
};
