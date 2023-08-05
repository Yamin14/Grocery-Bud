
function Alert (props) {

	const t = props.type;
	//props.setType("");
	let id = "";
	let className = '';

	if (t != "") {
		switch (t) {
			case "New Item Added": id="addAlert"; break;
			case "Item Incremented": id="incAlert"; break;
			case "Item Decremented": id="decAlert"; break;
			case "Item Deleted": id="delAlert"; break;
			case "Item Name Updated": id="editAlert"; break;
			case "List Cleared": id="clearAlert"; break;
		}

		className=id;

		//return for 3 seconds
		setTimeout(t => props.setType(""), 1000);

		return (
			<div className="alert">
				<p id='alert' className={id == "addAlert" || id == 'incAlert' || id == 'editAlert' 
					? "text-white bg-success border border-success rounded px-2"
					: "text-white bg-danger border border-danger rounded px-2"}>
						{t}!
				</p>		
			</div>
		);
	}

	return null;
}

export default Alert;