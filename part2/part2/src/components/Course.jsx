import Header from "./Header";
import Content from "./Content";
import TotalExercises from "./TotalExercises";

const Course = ({courses}) => {
return(
    <div>
    <h1>Web development curriculum</h1>
     <Header courses={courses[0]}/>
     <Content courses={courses[0]}/>
    <TotalExercises numTotal={courses[0]}/>
     <Header courses={courses[1]}/>
     <Content courses={courses[1]} />
     <TotalExercises numTotal={courses[1]}/>
    </div>
)
}
export default Course;