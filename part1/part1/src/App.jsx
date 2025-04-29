import { useState } from "react"

// const Header = (props) => {
//    return(
//     <div>
//     <h1>{props.course}</h1>
//     </div>
//    )
// }
// const Content = (props) => {
//   return(
//     <div>
//      <p>{props.name}</p>
//      <p>{props.name1}</p>
//      <p>{props.name2}</p>
//     </div>
//   )
// }
// const Total = (props) => {
//   return(
//     <div>
//      <p>{props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </div>
//   )
// }
// const Display = ({counter}) => <div>{counter}</div>
// const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

//Componente titulo
const Title = ({title}) => <div><h1>{title}</h1></div>;
//Componente para los botones
const Button = (props) => {
  return(
    <div>
      <button onClick={props.onClick}>{props.text}</button>
    </div>
  )
}
//componente para mostrar las estadisticas
const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}:</td>
       <td>{value}:</td>
    </tr>
  );
};
//Componente para mostar solo una estadistica
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total; // Fórmula típica
  const positivePercentage = total === 0 ? 0 : (good / total) * 100;

  if (total === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <tbody> 
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="total" value={total} />
      <StatisticLine text="average" value={average.toFixed(1)} />
      <StatisticLine text="positive" value={positivePercentage.toFixed(1) + ' %'} />
      </tbody>
    </table>
  );
 
};


const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [selected, setSelected] = useState(0);
  //funcion para mostrar el número total de comentarios recopilados en 'good'
  const addGoodComment = () => {
    setGood(good + 1)
  }
  //funcion para mostrar el número total de comentarios recopilados en 'neutral'
   const addNeutralComment = () => {
    setNeutral(neutral + 1)
   }
  //funcion para mostrar el número total de comentarios recopilados en 'neutral'
   const addBadComment = () => {
      setBad(bad + 1)
   }
  //Array de anecdotas
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   //funcion para seleccionar una frase aleatoria
   const randomAnecdote = () => {
    const randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
   }

  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    <Title title={'Give feedback'}/>
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <Button onClick={addGoodComment} text='good'/>
    <Button onClick={addNeutralComment} text='neutral'/>
    <Button onClick={addBadComment} text='bad'/>
    </div>
    <Title title={'statistics'}/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
      <p>{anecdotes[selected]}</p>
      <div style={{display: 'flex'}} >
      <Button onClick={() => console.log('votado')} text={'vote'}/>
      <Button onClick={randomAnecdote} text={'next anecdote'}/>
      </div>
    </div>
  )
}

export default App