// export default function Bag(props) {
//     const bag = {
//         padding: "20px",
//         border: "1px solid gray",
//         background: "#fff",
//         margin: "20px 0"
//     }

//     return (
//         <div style={bag}>
//             {props.children}
//         </div>
//     );
// }

// const Promo = (props) => {
//     return (
//         <>
//             <>
//                 <h1>{props.heading}</h1>
                
//             </>
//             <>
//                 <h1>{props.promoSubHeading}</h1>
//             </>
//         </>
        
//     );
// }
// export default Promo;

// export default function Promo(props) {
//     const h1 = {
//         color: "red",
//         fontWeight: "bold"
//     }

//     return (
//         <>
//             <>
//                 <p style={h1}>{props.heading}</p>
//             </>
//             <>
//                 <h2 style={{color: "red", textDecoration: "underline"}}>{props.promoSubHeading}</h2>
//             </>
//         </>
//     );
// }

//**********************************************************
// export default function Btn() {
//     const clickHandler = () => console.log("clicked");
//     return(
//         <button onClick={clickHandler}>Add me</button>
//     );
// }

// export default function Btn() {
//     const clickHandler = document.getElementById('btn');
//     clickHandler.addEventListener('click', () => {
//         console.log("clicked");
//     });
    
//     return (
//         <button id="btn" >Add me</button>
//     );
// }

// *************************************************************
// export default function ToggleButton() {
//     let darkMode = false;

//     function handleClick() {
//     darkMode = !darkMode;
//         if(darkMode) {
//             document.getElementById("text").innerHTML = "Dark mode is on";   
//         }

//         else {
//             document.getElementById("text").innerHTML = "Light mode is on";
//         }
//     }

//     return (
//         <div>
//             <button onClick={handleClick}>Click me</button>
//             <p id='text'></p>
//         </div>
//     );
// }

/******************************************************************** */
export default function Display(props) {
    return (
        <h1>{props.message}</h1>
    );
}