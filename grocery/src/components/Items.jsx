
import del_icon from './icons/del_icon.jpg';
import edit_icon from './icons/edit_icon.jpg';

function Items(props) {

	//items list
	const itemsList = props.items.map((item, index) => {
		return (
			<div className='item border' key={index}>

				<span className='itemName px-2'>{item}</span>
				
				<span className='itemOptions px-2'>

					<button className='btn' onClick={() => props.onEdit(index)}><img src={edit_icon} /></button>

					<button className='dec bg-danger text-light' onClick={() => props.onDecrement(index)}>-</button>
					<span className='noOfItems px-1'>{props.nums[index]}</span>
					<button className='inc bg-success text-light' onClick={() => props.onIncrement(index)}>+</button>

					<button className='btn' onClick={() => props.onDel(index)}><img src={del_icon} /></button>

				</span>

			</div>
		)
	});

	//return
	return itemsList;
}

export default Items;
