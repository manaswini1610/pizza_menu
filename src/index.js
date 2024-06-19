import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];


function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>

  )
}
function Header() {
  // const styles = {color:'red', fontSize:'42px',textTransform:"uppercase"};
  // return <h1 style={styles}>Fast React Pizza Co.</h1>

  return (

    <header className='header'>

      <h1>Fast React Pizza Co.</h1>

    </header>
  )
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = []
  const numPizzas = pizzas.length;


  return (
    <main className='menu'>
      <h2>Our Menu </h2>
      {numPizzas >0 ?<ul className='pizzas'>  
             {/* rendering the pizza by the list and we are usijng the map for the render all the list and we are creating an another list  */}
        {pizzaData.map((pizza) =>(
        <Pizza pizzaObj ={pizza} key={pizza.name}/>
         ))}     
      </ul>:<p>We are working on it please come back</p>}
      
    </main>
  )
}
function Pizza(props) {
  return (
    // here in this line we are rendering the java scrip code when the sould i+out is true we have to change the color 
    // so here we are entring into the backticks 
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}</span>
      </div>
    </li>

  )
}
// destructing the props
// function Pizza(props) {
//   return (
//     <li className='pizza'>
//       <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
//       <div>
//         <h3>{props.pizzaObj.name}</h3>
//         <p>{props.pizzaObj.ingredients}</p>
//         <span>{props.pizzaObj.price}</span>
//       </div>
//     </li>

//   )
// }

function Footer() {

  const hour = new Date().getHours()
  const openHour = 6;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if(isOpen) alert("We are open");
  // else alert("we are close")

  // if(hour >= openHour && hour <= closeHour) alert("We are currently open!");
  //  else alert("Sorry we are closesd") 
  //  we are getting the alart twites because we are using the strict mode so that it will renders twites 

  return(
    <footer className='footer'>
      {isOpen && ( 
      <div className='order'>
        <p>We're open until {closeHour}:00. Come visit us or order online.</p>
        <button className='btn '>Order</button>
      </div>
      )}
    </footer>
  ) 
  // Creating a time 
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // strictmode is used to cenck wheather the application using the current vesion or not 
  <React.StrictMode>
    <App />
  </React.StrictMode>
);