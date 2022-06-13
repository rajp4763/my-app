// Reusable Button
function Button(props) {
  return (
    <button className="button" onClick={props.handleClick}>
      Submit
    </button>
  );
}
export default Button;
