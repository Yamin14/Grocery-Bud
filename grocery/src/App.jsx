import { useState } from "react";
import Items from "./components/Items";
import AddItem from "./components/AddItem";
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  //items
  const [items, setItems] = useState([]);
  const [nums, setNums] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState("");
  const [editId, setEditId] = useState(-1);
  const [alertType, setAlertType] = useState("");

  //clear items
  const clearItems = () => {
    setItems([]);
    setNums([]);
    setAlertType("List Cleared");
  };

  //add item
  const handleAdd = (t, n) => {
    if (t != "") {
      setItems(items => [...items, t]);

      let x;
      switch (n) {
        case "One": x = 1; break;
        case "Half-Dozen": x = 6; break; 
        case "Dozen": x = 12; break;
        default: x=n;
      } 

      setNums(num => [...nums, x]);
      setAlertType("New Item Added");
    }
  };

  //increment and decrement
  const handleIncrement = (i) => {
    const update = nums.map((item, index) => index == i ? item+1: item);
    setNums(update);
    setAlertType("Item Incremented");
  }

  const handleDecrement = (i) => {
    const update = nums.map((item, index) => index == i && item > 0 ? item-1: item);
    setNums(update);
    setAlertType("Item Decremented");
  }

  //delete item
  const handleDel = (i) => {
    let update = nums.filter((item, index) => index != i);
    setNums(update);

    update = items.filter((item, index) => index != i);
    setItems(update);
    setAlertType("Item Deleted");
  }

  //edit item
  const handleEdit = (i) => {
    setIsEditing(true);
    setEditText(items[i]);
    setEditId(i);
  }

  //save edit
  const handleSave = (t) => {
    const update = items.map((item, index) => index == editId ? t: item);
    setItems(update);
    setIsEditing(false);
    setEditText("");
    setEditId(-1);
    setAlertType("Item Name Updated");
  }

  //return
  return (
    <main>
    
      <Alert type={alertType} setType={setAlertType} />
      <section className='text-center'>

        <h1>Grocery Bud</h1>

        <AddItem onAdd={handleAdd} isEditing={isEditing} editText={editText} setEditText={setEditText} onSave={handleSave}/>

        {items.length == 0 && <h2>No Items</h2>}

        {items.length > 0 && (
          <div>

            <Items items={items} nums={nums} onIncrement={handleIncrement} onDecrement={handleDecrement}
            onDel={handleDel} onEdit={handleEdit}/>

            <button onClick={clearItems} className='clearItems my-2'>
              Clear Items
            </button>
          </div>
        )}

      </section>

      <footer className='bg-secondary text-light text-center p-2 border-top border-dark border-3'>Developed By Yamin</footer>
    </main>
  );
}

export default App;
