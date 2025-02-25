import { createContext, useEffect, useState } from "react";
import axios from 'axios';

// Create a context for global state management
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State to store the list of food items
    const [food_list, set_food_list] = useState([]);

    // State to store the authentication token, initialized from localStorage if available
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    // Base URL for API requests, fetched from environment variables
    const url = import.meta.env.VITE_API_URL;

    /**
     * Function to fetch the list of food items from the API
     * Uses axios to make a GET request and updates the state with the received data
     */
    const fetchFoodList = async () => {
        try {
            const res = await axios.get(url + "/api/food/list");
            if (res?.data) {
                //console.log("Fetched Food List: ", res.data.data);
                set_food_list(res.data.data); // Update state with food data
            }
        } catch (error) {
            console.error("Error fetching food list: ", error.message);
        }
    };

    /**
     * useEffect to fetch the food list when the component is mounted
     * The empty dependency array ensures this runs only once
     */
    useEffect(() => {
        fetchFoodList();
    }, []);

    /**
     * useEffect to log the food list whenever it updates
     * This helps in debugging to see if state updates correctly
     */
    useEffect(() => {
        //console.log("Updated food list: ", food_list);
    }, [food_list]);

    /**
     * Context value to provide state and functions to the entire app
     */
    const contextValue = {
        food_list,    // List of food items
        url,          // API base URL
        fetchFoodList, // Function to refetch food list
        token,        // Authentication token
        setToken      // Function to update token
    };

    /**
     * StoreContext.Provider makes the context available to all child components
     */
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
