import { useState } from 'react';
import './App.css';
import MineField from './components/MineField';

function App() {
  const [option, setOption] = useState('step')
  return (
    <div className="App">
      <MineField option={option}/>
      <button 
        className={`w3-button w3-border w3-jumbo ${option == 'step' ?'w3-grey':'' }`}
        onClick={()=>setOption('step')}
      >Step</button>
      <button 
        className={`w3-button w3-border w3-jumbo ${option == 'flag' ?'w3-grey':'' }`}
        onClick={()=>setOption('flag')}
      >Flag</button>
    </div>
  );
}

export default App;
