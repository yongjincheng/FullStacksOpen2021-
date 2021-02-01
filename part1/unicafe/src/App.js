import React, { useState } from 'react'

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Header = () =>{
  return(
    <div>
      <h1>
        Give Feedback
      </h1>
    </div>
  )
}

const Statistic = ({text,value})=>{
  return(
    <tr>
      <td>{text}</td><td>{value}</td>
    </tr>
  )
}
const Statistics = ({good,neutral,bad}) => {
  let totalNum = good + neutral + bad
  let goodScore = (good/totalNum)
  let averageScore = (good-bad)/totalNum

  if (totalNum === 0 ){
    return(
      <div>
        <p>
          No FeedBack Given
        </p>
      </div>
    )
  }
  return(
    <div>
      <h1>
        Statistics
      </h1>
      <table>
        <tbody>
          <Statistic text = 'Good' value ={good}/>
          <Statistic text = 'Neutral' value = {neutral}/>
          <Statistic text = 'Bad' value = {bad}/>
          <Statistic text = 'Average' value = {averageScore}/>
          <Statistic text = 'positive' value = {goodScore}/>
        </tbody>
      </table>
    </div>
  ) 

  
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const plusGood = () => (setGood(good+1));
  const plusNeutral = () => (setNeutral(neutral+1));
  const plusBad = () => (setBad(bad+1));
  const results = {
    good: good,
    neutral: neutral,
    bad: bad
  }
  return (
    <div>
      <Header/>
      <button onClick= {plusGood}> Good </button>
      <button onClick= {plusNeutral}> Neutral </button>
      <button onClick= {plusBad}> Bad </button>
      <Statistics good = {good} neutral = {neutral} bad = {bad}/>
    </div>
  )
}

export default App