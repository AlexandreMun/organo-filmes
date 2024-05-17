import "./Dropdown.css";

const Dropdown = (props) => {
  const onTyped = (event) => {
    props.onChanged(event.target.value);
    // console.log(event.target.value);
  };

  return (
    <div className="dropdown">
      <label>{props.label}</label>
      <select value={props.value} onChange={onTyped} required={props.required}>
        <option value=""></option>
        {props.items.map((item) => {
          return <option key={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default Dropdown;
