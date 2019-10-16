import React, {useState} from 'react';
import Data from './components/Data';
import Form from './components/Form/Form';
// import FormInfo from './components/Form/FormInfo';
import './App.css';

function App() {
  const [info, setInfo] = useState(Data)

  const addNewMember = meminfo => {
    setInfo(...info, meminfo)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addNewMember={addNewMember}/>
        
      </header>
    </div>
  );
}

export default App;
