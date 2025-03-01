import { createContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import axios from 'axios';
import { haddleError, haddleSuccess } from "../Utils/Toastify";

// Create a context for global state management
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    // State to store the list of food items
    const [food_list, set_food_list] = useState([]);

    // State to store the authentication token, initialized from localStorage if available
    const [token, setToken] = useState(localStorage.getItem("token") || "");

    // Base URL for API requests, fetched from environment variables
    const url = import.meta.env.VITE_API_URL;
    //storing the cart items 
    const [cartItems, setCartItems] = useState([]);

    //auth0
     const {
        loginWithRedirect,
        user,
        isAuthenticated,
        logout,
        getAccessTokenSilently,
      } = useAuth0();

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


    let fetchcartItems = ()=>{
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || []; //array of an obj
        setCartItems(storedCart);
    }

  console.log(cartItems);



    useEffect(() => {
        fetchFoodList();
        fetchcartItems();
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
        setToken,      // Function to update token
        cartItems ,     //cartitems 
        setCartItems,
        loginWithRedirect,
        user,
        isAuthenticated,
        logout,
        getAccessTokenSilently,
        haddleError,
        haddleSuccess
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
