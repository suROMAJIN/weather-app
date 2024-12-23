const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const openweatherAPI = async (city: string): Promise<any> => {
    // ! Uses api key from env, not going to publish it here
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
    const url = `${BASE_URL}/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch weather data");
    }

    return response.json();
};
