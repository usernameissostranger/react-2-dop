import { useState } from "react";
import Form from "./components/Form";
import Table from "./components/Table";
import './style.css';

function App() {
  const [data, setData] = useState({});

  return (
    <div className="weather">
      <div className="name">
        <h1>w e a t h e r</h1>
        <p>of the world</p>
      </div>
      
      <Form data={data} setData={setData} />
      <Table data={data} />
    </div>
  );
}

export default App;
