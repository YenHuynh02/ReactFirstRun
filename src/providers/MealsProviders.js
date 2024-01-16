import React from "react";

const MealsContext = React.createContext();
const todayMeals = ["Pho", "Bun Bo Hue", "Banh Canh"];
const MealsProvider = ({children}) => {
    const [meals, setMealsList] = React.useState(todayMeals);
    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    );
}

export const useMealsListContents = () => React.useContext(MealsContext)
export default MealsProvider;