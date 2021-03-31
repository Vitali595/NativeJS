import React from 'react';
import './App.css';

function App() {
  const names = ["Dimych", "Sveta", "Katya", "Victor", "Ignat"]
  const users = [{id: 1, name: "Dimych"}, {id: 41, name: "Sveta"}, {id: 31, name: "Katya"}, {id: 111, name: "Victor"}, {id: 21, name: "Ignat"}]
  const liElements = users.map((u) => <li key={u.id}>{u.name}</li>)

  return (
    <div className="App">
      <ul>
        {liElements}
      </ul>
    </div>
  );
}

export default App;
