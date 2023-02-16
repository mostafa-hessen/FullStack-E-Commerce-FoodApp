import "./App.css";
import Main from "./Component/Main/Main";

function App() {
  return (
    <div className="App">
      <div className="container-fluid  py-4 px-5" style={{backgroundColor:'purple',overflow:"hidden",height:'100vh'}}>
        <Main/>
      </div>
    </div>
  );
}

export default App;
