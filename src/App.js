import './App.css';
import jokes from './jokes.js';
import Header from "./Header.js"


function App() {
  let i = Math.ceil(Math.random() * (200 - 0) + 0);
  return (
    
    <div className="App">
          <Header/>
          
        
          <h3>{jokes[i]["title"]}</h3>
          <p>{jokes[i]["body"]}</p>
        
      
    </div>
  );
}

export default App;
