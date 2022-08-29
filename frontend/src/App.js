import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Test from "./components/Test";

function App() {
  const [name, setUserName] = useState("");

  useEffect(() => {
    getName();
  }, []);
  const getName = async () => {
    const response = await axios.get("http://localhost:5000/name");
    const data = await response.data;
    setUserName(data);
  };
  return (
    <div className="App">
      <h1 className="title">Front end</h1>
      <h1>Hello {name}</h1>
      <Test />
    </div>
  );
}

export default App;
