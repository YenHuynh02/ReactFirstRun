import { useMealsListContents } from "../providers/MealsProviders";

const MealsList = () => {
    const {meals} = useMealsListContents(); // Connect to the state of Meals Providers
    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    );
}

export default MealsList;