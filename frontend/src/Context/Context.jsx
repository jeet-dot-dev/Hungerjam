import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [food_list, set_food_list] = useState([]);
    const [token,setToken] = useState("");
    const url = "http://localhost:3000";

    const fetchFoodList = async () => {
        try {
            const res = await axios.get(url + "/api/food/list");
            if (res?.data) {
                console.log("Fetched Food List: ", res.data.data);
                set_food_list(res.data.data); // Update the food_list state
                console.log("data :",food_list);
            }
        } catch (error) {
            console.error("Error fetching food list: ", error.message);
        }
    };

    useEffect(() => {
       async function  loadData() {
        await  fetchFoodList();
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
       }
       loadData();
    }, []);

    const contextValue = {
        food_list,
        url,
        fetchFoodList,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
