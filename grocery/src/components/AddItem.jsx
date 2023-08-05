
import {useState} from 'react'

function AddItem(props) {

	const [text, setText] = useState("");
	const [num, setNum] = useState("One");

  	return (

	    <div className='mb-2'>

	      <input className="mx-1" type="text" placeholder="e.g. eggs"
	      value={props.isEditing ? props.editText: null}
	      onChange={(e) =>  {
	      	setText(e.target.value);
	      	props.setEditText(e.target.value);
	      }}/>

	      <select className="mx-1" onChange={(e) => setNum(e.target.value)}>
	      	<option>One</option>
	      	<option>Half-Dozen</option>
	      	<option>Dozen</option>
	      </select>

	      <button className='addBtn' onClick={() => {props.isEditing ? props.onSave(text) : props.onAdd(text, num)}}>
	      	{props.isEditing ? "Save": "Add"}
	      </button>

	    </div>
  	);
}

export default AddItem;
