import "./App.css";
import HelloWorld from "./HelloWorld";
import Counter from "./Counter";
import Form from "./Form"
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <Counter/>
      <Form/>
      <DataFetcher/>
    </div>
  );
}

export default App;
