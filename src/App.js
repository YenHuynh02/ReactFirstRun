// import Display from './components/Bag';
// import MealsProvider from './providers/MealsProviders';
// import MealsList from './components/MealsList';
// import Counter from './components/Counter';
import './App.css';
import { useReducer } from 'react';

// import React, { useState } from 'react';

/**************************************************************** */
// export default function App() {
//   return (
//       <Bag children="Apple, Orange, Grape" />
//   );
// }

// export default function Test() {
//   return (
//     <Promo heading="My name is" promoSubHeading="Peter" />
//   );
// }

// export default function Test() {
//   return (
//     <div>
//         <h1>My name is Yen: {Math.floor(Math.random() * 10) + 1} </h1>  
//     </div>

//   )
// }

//------------------------------------------------------------------- 
// const bool = false;

// function Test(props) {
//   try {
//     (5).toUpperCase();
//   }
//   catch (e) {
//     console.log("Cannot convert" + e);
//   }

//   return (
//     <>
//       <h1>My name is {props.name}</h1>
//       <h2>I am {props.age} years old</h2>
//       <h3>This expression is {props.exp.toString()}</h3>
//     </>
//   );
// }

// export default function App() {
//   return (
//   <>
//     <Test 
//     name = "Peter"
//     age = {19}
//     exp = {!bool}
//     />
//   </>

//   );
// }

//-------------------------------------------------------------------
// export default function addCart(count) {
// count += 1;
// return count;
// }

//*************************************************************************** */
// export default function App() {
//   const [inputText, setText] = useState('hello');

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={inputText} onChange={handleChange} />
//       <p>You typed: {inputText}</p>
//       <button onClick={() => setText('hello')}>
//         Reset
//       </button>
//     </>
//   );

// }

/**************************************************************** */
// export default function RegisteredForm() {
//   const [form, setForm] = useState({
//     firstName: 'Peter',
//     lastName: 'Huynh',
//     age: 19
//   });

//   return (
//     <>
//       <label>
//         First Name:
//         <input
//           value={form.firstName}
//           onChange={e => {
//             setForm({
//               ...form,
//               firstName: e.target.value
//             })
//           }}
//         />
//       </label>
//       <br></br>
//       <label>
//         Last Name:
//         <input
//           value={form.lastName}
//           onChange={e => {
//             setForm({
//               ...form,
//               lastName: e.target.value
//             })
//           }}
//         />
//       </label>
//       <br></br>
//       <label>
//         Age:
//         <input 
//           value={form.age}
//           onChange={e => {
//             setForm({
//               ...form,
//               age: e.target.value
//             })
//           }}
//         />
//       </label>

//       <p>{form.firstName} {form.lastName} {form.age} </p>
//     </>
//   );
// }

/******************************************************************* */
// export default function App() {
//   const [word, setWord] = React.useState('Eat');
//   function ChangeDisplay() {
//     setWord("Hello");
//   }

//   return(
//     <>
//       <Display message={word + " World"}/>
//       <button onClick={ChangeDisplay}>Display</button>
//     </>
//   );
// }

/********************************************************************* */
// export default function App() {
//   return(
//     <div>
//       <MealsProvider>
//         <MealsList />
//         <Counter />
//       </MealsProvider>
//     </div>
//   );
// }

const reducer = (state, action) => {
  if (action.type === "ride") return {money: state.money + 10};
  if (action.type === "fuel") return {money: state.money - 50};
  return new Error();
}

export default function App() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'ride'})}>
          A new customer!
        </button>
        <button onClick={() => dispatch({type: 'fuel'})}>
          Refill the tank!
        </button>
      </div>
    </div>
  );
}