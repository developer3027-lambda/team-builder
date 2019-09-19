import React, { useState } from "react";
import ReactDom from 'react-dom';
import './App.css';
import TeamInfo from './components/TeamIfno';
import TeamCard from './components/TeamCard';

function App() {

  const [info, SetInfo] = useState([
    {
      id: '0',
      fName: 'Mason',
      lName: 'Roberts',
      email: 'test@mail.com',
      role: 'BayMax'
    }
  ]);

  const addNewCard = member => {
    const newMember = {
      id: Date.now(),
      fName: member.fName,
      lName: member.lName,
      email: member.email,
      role: member.role
    };
    SetInfo([...info, newMember]);
  };

  return (
    <div className='App'>
      <h1>Team Member</h1>
      <TeamCard addNewCard={addNewCard} />
      <TeamInfo info={info} />
    </div>
  );
}

export default App;
