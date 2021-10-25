const Box = (props) => {
  const addhandler = () => {
    console.log("Box WOW");
  };
  return (
    <div className="box">
      <div>
        <h2>{props.name}</h2>
        <p>Title: {props.title}</p>
        <p>Age: {props.age}</p>
        <button onClick={addhandler}>Click me</button>
      </div>
    </div>
  );
};
export default Box;
