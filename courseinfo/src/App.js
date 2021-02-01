import React from 'react'

const Header = (head) => {
  return(
    <h1>
      {head.course}
    </h1>
  )
}
const Parts = (prop)=>{
  return(
    <p>
      {prop.parts.name} {prop.parts.exercises}
    </p>
  )
}

const Content = (prop)=>{
  return(
    <div>
      <Parts parts = {prop.parts[0]}/>
      <Parts parts = {prop.parts[1]}/>
      <Parts parts = {prop.parts[2]}/>
    </div>
  )
}
const Total = (prop) =>{
  let total = 0;
  prop.parts.forEach(part=> {
    total+=part.exercises
  });
  return(
    <p>
      Number of Exercises {total}
    </p>
  )
}

const App = () => {
  const course = {
    name : 'Half Stack application development',
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10
      },
      {
        name: "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]
  };


  return (
    <div>
      <Header course = {course.name}/>
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App