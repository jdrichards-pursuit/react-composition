import CardNav from "./CardNav";

//this container is the card that is repeated design wise.
// It always has a navbar component and then whatever child that is inserted.
//Notice then CardNav is dynamic and takes a prop to change the title which is passed in the App.js when calling the Container Component
//check App.js to see how the Container component is used

const Container = (props) => {
  return (
    <div className="container">
      <CardNav title={props.title} />
      {props.children}
    </div>
  );
};
export default Container;
