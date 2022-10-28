import "./App.css";
import { Myform } from "./components/Myform";

function App() {
  return (
    <div className="App">
      <h1>Forms</h1>
      <Myform user={{ name: "ana", email: "ana@teste.com", bio: "advogado", role: "admin" }} />
    </div>
  );
}

export default App;
