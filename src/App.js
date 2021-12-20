import logo from './logo.svg';
import "./App.css"
import Home from "../src/Components/Home";
import MainData from "./data.json";
import Searchbar from './Components/Search';

let i = 0;
MainData.map((e)=>{
    e.push(i++)       
});
function App() {
  
  return (
    <div className="main_div">
      <Home data={MainData}/>
    </div>
  );
}

export default App;
