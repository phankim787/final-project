import axios from 'axios';

const API_URL = 'https://api.edamam.com/api/nutrition-data';

const APP_ID = '816e9c0c';
const APP_KEY = '87d1100b78206dd43f4f165ac7ca55dd';

export const getNutritionData = async (ingredient) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                app_id: APP_ID,
                app_key: APP_KEY,
                nutrition_type: 'cooking',
                ingr: ingredient,
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        throw error;
    }
};
