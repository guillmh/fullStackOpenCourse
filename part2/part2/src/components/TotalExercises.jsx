const TotalExercises = ({numTotal}) => {
return(
    <p><b>Total of {numTotal.parts.reduce((acc, item) => acc + item.exercises, 0)} exercises</b></p>
)
}
export default TotalExercises;