
import React from 'react'
import Card from '../Components/Card'

const fruits = [
  {
    id : 1,
    price : 10000,
    name : "banana",
    description : "fresh banana from world",
  },
  {
    id : 2,
    price : 11000,
    name : "apple",
    description : "fresh apple from world",
  },
  {
    id : 3,
    price : 15500,
    name : "mango",
    description : "fresh mango from world",
  },
  {
    id : 4,
    price : 20000,
    name : "grape",
    description : "fresh grape from world",
  },
  {
    id : 5,
    price : 5000,
    name : "kiwi",
    description : "fresh kiwi from world",
  },
];

const Body = () => {
  return (
    <section className='body'>
      {
        fruits.map(fruit=>(
          <Card key={fruit.id} fruit={fruit}/>
        ))
      }
    </section>
    )
}

export default Body