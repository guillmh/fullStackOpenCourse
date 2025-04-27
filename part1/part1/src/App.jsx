const Header = (props) => {
   return(
    <div>
    <h1>{props.course}</h1>
    </div>
   )
}
const Content = (props) => {
  return(
    <div>
     <p>{props.name}</p>
     <p>{props.name1}</p>
     <p>{props.name2}</p>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
     <p>{props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  
  return (
    <div>
     <Header course={course.name}/>
     <Content name={course.parts[0].name} name1={course.parts[1].name} name2={course.parts[2].name}/>
     <Total exercises1={course.parts[0].exercises} exercises2={course.parts[1].exercises} exercises3={course.parts[2].exercises}/>
    </div>
  )
}

export default App