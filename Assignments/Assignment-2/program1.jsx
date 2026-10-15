import { useState } from "react";

function ItemForm(props) {
  const [item, setItem] = useState("");

  function add(e) {
    e.preventDefault();

    if (item !== "") {
      props.addItem(item);
      setItem("");
    }
  }

  return (
    <form onSubmit={add}>
      <input
        value={item}
        onChange={(e) => setItem(e.target.value)}
        placeholder="Enter item"
      />
      <button>Add</button>
    </form>
  );
}

function ItemList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li key={i}>
          {item}
          <button onClick={() => props.deleteItem(i)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

function App() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function deleteItem(i) {
    setItems(items.filter((item, index) => index !== i));
  }

  return (
    <div>
      <h2>My Items</h2>
      <ItemForm addItem={addItem} />
      <ItemList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
