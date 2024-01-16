import { useMealsListContents } from "../providers/MealsProviders";
const Counter = () => {
    const {meals} = useMealsListContents();
    return (
        <div>
            <p>Number of meals today: {meals.length}</p>
        </div>
    );
}

export default Counter;