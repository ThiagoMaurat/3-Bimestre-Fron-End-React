import { useState } from "react";

function App() {
  const [state, setstate] = useState([{}]);
  const [texto, settexto] = useState("");

  function removeimg(event) {
    setstate([
      {
        img: "https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg",
        title: "Java",
      }
    ]);
  }

  removeimg();

  return (
    <>
      <img src={state[0].image} alt='asd'/>
      <h1>Java</h1>
      <img
        src="https://img.olhardigital.com.br/wp-content/uploads/2018/09/20180903133856-860x450.jpg"
        alt="java"
      />
      <h1>Java</h1>
    </>
  );
}

export default App;
