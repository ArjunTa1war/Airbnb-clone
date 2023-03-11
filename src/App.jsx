import Navbar from "./components/navbar"
import Hero from "./components/hero";
import Card from "./components/card"
import Data from "./data"
import './index.css';

export default function App() {
    const data = Data.map(card =>{
        return (<Card 
        key = {card.id}
        // item = {card} // we need to use prop.item in card.jsx
        {...card}
        />
     )
    })
    return (
        <div>
        <Navbar />
        <Hero />
        <section className="card-section">
        {data}
        </section>
        </div>
    )
}

// const data = Data.map(card =>{
//     return (<Card 
//     key = {card.id}
//     img = {card.coverImg}
//     rating = {card.stats.rating}
//     reviewcount = {card.stats.reviewCount}
//     location = {card.location}
//     title =  {card.title}
//     price ={card.price}
//     openSpots = {card.openSpots}
//     />
//  )
// })