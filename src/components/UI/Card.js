import "./Card.css";

function Card(props) {
    // This component functions as a re-usable wrapper component for 
    // the expense item and expenses component
    // we also use props children so it can now be used as a wrapper for anywhere in the project
  const classes = "card " + props.className;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
