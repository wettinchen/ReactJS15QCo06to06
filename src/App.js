import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";

function App() {
  const API_URL = "https://jsonplaceholder.typicode.com/";
  const [requestType, setRequestType] = useState("users");
  const [items, setItems] = useState([]);

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${requestType}`);
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchItems();

  }, [requestType]);

  return (
    <div className="App">
      <Form
        requestType={requestType}
        setRequestType={setRequestType}
      />
      <List
        items={items}
      />
    </div>
  );
}

export default App;
