import "./App.css";
import Input from "./components/Input";
import Convertor from "./components/Convertor";
import { useEffect, useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [preCurrency, setPreCurrency] = useState("INR");
  const [postCurrency, setPostCurrency] = useState("USD");
  const [output, setOutput] = useState("");

  useEffect(
    function () {
      async function getData() {
        try {
          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${input}&from=${preCurrency}&to=${postCurrency}`
          );
          if (!res.ok) throw new Error("Error Occured");
          const data = await res.json();
          console.log(data);
          console.log(data.rates);
          setOutput(data.rates[postCurrency]);
        } catch (err) {
          console.log(err.message);
        }
        if (input.length > 0) {
          setOutput("");
          return;
        }
      }
      getData();
    },
    [input, preCurrency, postCurrency]
  );

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">React Currency Convertor</h1>
        <div className="main">
          <Input input={input} setInput={setInput} />
          <Convertor
            preCurrency={preCurrency}
            setPreCurrency={setPreCurrency}
            postCurrency={postCurrency}
            setPostCurrency={setPostCurrency}
          />
          <p className="output-section">{output}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
