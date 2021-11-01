import { Link, useRouteMatch } from "react-router-dom";
const Box = (props) => {
  const addhandler = () => {
    console.log("Box WOW");
  };
  const match = useRouteMatch();

  return (
    <div className="box">
      <div>
        <h2>{props.name}</h2>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
        <button onClick={addhandler}>Click me</button>
        <Link to={`${match.url}/${props.name}`}>More on Person</Link>
      </div>
    </div>
  );
};
export default Box;
