import { useState } from "react";
import Button from "./components/Buttom/Button.jsx";
import "./styles.css";

function App() {
  const [textoinput, setTextoinput] = useState("");

  const [tasks, setTasks] = useState([
    {
      id: 1,
      nome: "Fazer café",
      status: false,
    },
    {
      id: 1,
      nome: "Fazer café",
      status: false,
    },
    {
      id: 1,
      nome: "Fazer café",
      status: false,
    },
  ]);

  const task = {
    id: 1,
    nome: "Fazer café",
    status: false,
  };

  function handleTextInput(event) {
    setTextoinput(event.target.value);
  }

  return (
    <header className="header">
      <input onChange={(event) => handleTextInput(event)} className="input" />
      <div className="container_buttons">
        <Button texto="Adicionar" />
        <Button texto="Limpar" />
        {textoinput}
      </div>
    </header>
  );
}

export default App;
