



function Product(props) {
    return (
        <div>
            <h2>{props.product.name}</h2>
            <p>${props.product.price}
            - {props.product.description}</p>
        </div>
    )
}

import React from 'react'
import Product from "./Product"
import productsData from "./vschoolProduct"


function App() {
    const productComponent = productsData.map(item => <Product key={item.id} product={item}/>)
    return (
    <div>
{productComponents}
    </div>
    )
}

export default App

import React from 'React'
import ReactDOM from 'react-dom'
import App from './App'

ReactDOM.render(<App />, document.getElementById('root'))





const jokesData = [
    {
        id: 1,
        question: "Why did the chicken cross the road?",
        answer: "To get to the other side."
    },

    {  id: 2,
         question: "Why did the cow cross the road?",
        answer: "To get to the MOO-vie.",
},
         {
             id: 3,
            question: "How can you tell if someone went to Queen's?",
            answer: "Don't worry, they'll tell you",
         },
          
         {
        id: 4,
            question: "What is black and white and red all over?",
            answer:"A penguin with a sunburn.",
         },
         {
      id: 5,
            answer: "It's hard to explain puns to kleptomaniacs because they always take things literally.",
        }
]


import React from 'react'

function Question() {
    return (
        <div>
            <h3>Why did the chicken cross the road?</h3>
        </div>
    )
}

export default Question

import React from 'react'

function Joke(props) {
    return(
        <div>
            <h3 style={{display: props.question ? "block": "none"}}>Question: {props.question} </h3>
            <h3 style = {{color: !props.question &&}}>Answer: {props.answer}</h3>
        </div>
    )
}

export default Joke



import React from 'react'
import Joke from './Joke'
import jokesData from "./jokesData"

function App() {

    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question ={joke.question} answer = {joke.answer}/>)
    return (
        <div>
            {jokeComponents}
        </div>
    )
}

export default App


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


ReactDOM.render(<App />, document.getElementById('root'))




import React from 'react'

function ContactCard(props) {
    return(
        <div claName="contact-card">
            <img src={props.contact.imgUrl}/>
            <h3>{props.contact.name}</h3>
            <p>Phone: {props.contact.phone}</p>
            <p>Email: {props.contact.email}</p>
        </div>
    )
}

function App() {
    return (
        <div className="contacts">
            <ContactCard 
            contact={{
                name: "Mr.Whiskerson",
                imgUrl="http://placekitten.com",
                phone= "sjflkejflkj",
                email= "feoujewoiefwo"
            }
        }
        />
            <ContactCard 
            name="Mr. Whiskerson" 
            imgUrl="http://placekitten.com"
            phone= "sklwjswl"
            email= "dkjdelkjdel"
            />
        </div>
    )
}

export default ContactCard


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'




ReactDOM.render(
    <App />,
    document.getElementById('root')
)


import React from 'react'
import Header from './navbar'
import MainContent from './maincontent'
import Footer from './footer'

function App() {
    const date = new Date
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12){
        timeOfDay = "morning";
        styles.color = "orange";
    } else if (hours >= 12 && hours <17){
        timeOfDay = "afternoon";
        styles.color = "red";
    } else {
        timeOfDay = "night"
        styles.color = "blue";
    }

    const styles = {
        color: "orange", 
        backgroundColor: "blue",
        fontSize: "200px"
    }

    return (
        <div><h1 style = {styles}>  {`Good ${timeOfDay}`}</h1>
        <Header />
        <MainContent />
        <Footer />
        </div>
    )
}

export default App


import React from 'react'

function Header() {
    return(
        <header className="navbar">
            <nav>
                <ul className="navlist">
                    <li className="home button">Home</li>
                    <li>About This Site</li>
                    <li>Tools</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

import React from 'react'

function MainContent() {
    return(
        <main>
        <div>
            <h2>Close Reading Assistant</h2>
            <div>
                <h3>How to Use This Tool</h3>
            </div>
        </div>
        </main>
    )
}

export default MainContent

import React from 'react'

function Footer() {
    return(
       <footer> <div>
            <h4>Website By Andrew Reszitnyk/EgoTunnel 2020</h4>
        </div>
        </footer>
    )
}

export default Footer