import Part from "./Part";
const Content = ({ courses }) => {
 return(
    <div>
        {courses.parts.map(parts => (
           <Part key={parts.id} name={parts.name} exercises={parts.exercises}/>
        ))}
    </div>
 );
};

export default Content;