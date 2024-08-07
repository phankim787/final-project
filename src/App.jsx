import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import Output from "./components/Output.jsx";
import { useState } from "react";

export default function App() {
    const [calories, setCalories] = useState(null);
    const [error, setError] = useState('');

    const handleCalculate = (input) => {
        // Basic validation for input
        if (/^\d+\s+\w+\s+of\s+\w+$/.test(input)) {
            // Replace this with actual API call
            const calculatedCalories = Math.floor(Math.random() * 500);
            setCalories(calculatedCalories);
            setError('');
        } else {
            setError('Please try again!');
            setCalories(null);
        }
    };

    return (
        <>
            <Header/>
            <Input onCalculate={handleCalculate} />
            <Output calories={calories} error={error} />
        </>
    )
}