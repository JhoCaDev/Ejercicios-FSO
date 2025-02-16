const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.partsB[0].name} exercises={props.partsB[0].exercises} />
      <Part name={props.partsB[1].name} exercises={props.partsB[1].exercises} />
      <Part name={props.partsB[2].name} exercises={props.partsB[2].exercises} />
    </div>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises
      {props.partsA[0].exercises +
        props.partsA[1].exercises +
        props.partsA[2].exercises}{" "}
    </p>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercises: 10 },
    { name: "Using props to pass data", exercises: 7 },
    { name: "State of a component", exercises: 14 },
  ];

  return (
    <>
      <div>
        <Header course={course} />
        <Content partsB={parts} />
        <Total partsA={parts} />
      </div>
    </>
  );
};

export default App;
