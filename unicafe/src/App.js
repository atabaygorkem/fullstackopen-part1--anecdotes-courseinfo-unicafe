import { useState } from "react"

const StatisticLine = ({ text, content }) => (
  <tr>
    <td>{text}</td>
    <td>{content}</td>
  </tr>
)

const Button = ({ text, onClick }) => <button onClick={onClick}>{text}</button>

const Statistics = ({ statistics: { good, bad, neutral } }) => (
  <table>
    <tbody>
      <StatisticLine text="Good" content={good} />
      <StatisticLine lay text="Neutral" content={neutral} />
      <StatisticLine text="Bad" content={bad} />
      <StatisticLine text="All" content={good + bad + neutral} />
      <StatisticLine
        text="Average"
        content={(good - bad) / (good + bad + neutral)}
      />
      <StatisticLine
        text="Positive"
        content={(good / (good + bad + neutral)) * 100 + "%"}
      />
    </tbody>
  </table>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
      <h1>Give Feedback</h1>
      <Button text={"good"} onClick={() => setGood(good + 1)} />
      <Button text={"neutral"} onClick={() => setNeutral(neutral + 1)} />
      <Button text={"bad"} onClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      {good + bad + neutral ? (
        <Statistics statistics={{ good: good, bad: bad, neutral: neutral }} />
      ) : (
        <p>No feedback given.</p>
      )}
    </>
  )
}

export default App
