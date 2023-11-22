import './App.css';
import jokes from './jokes.js';
import Header from "./Header.js";
import Refresh from './Refresh';


function App() {
  let i = Math.ceil(Math.random() * (1024 - 0) + 0);
  console.log("printing joke");
  return (
    
    <div className="App">
          <Header/>
          
        
          <h3>{jokes[i]["title"]}</h3>
          <p>{jokes[i]["body"]}</p>
        
      <Refresh />
    </div>
  );
}

export default App;
