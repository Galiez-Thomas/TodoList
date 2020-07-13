import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import Inputtask from './Components/Inputtask';
import Buttonadd from './Components/Buttonadd';
import Buttonreset from './Components/Buttonreset';
import Todo from './Components/Todo';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [inputvalue, setValue] = useState('');
  const [tabtask, setTabtask] = useState([]);

  async function fetchTodos() {
    const result = await fetch('http://localhost:3000/todo');
    const data = await result.json();
    setTabtask(data);
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  const changeTask = (e) => {
    setValue(e.target.value);
  }

  const addTask = () => {
    fetch('http://localhost:3000/todo', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: uuidv4(),
        task: inputvalue,
      })
    }).then(() => fetchTodos());
    setValue('');
  }

  const deleteTask = (id) => {
    fetch(`http://localhost:3000/todo/${id}`, {
      method: 'DELETE'
    }).then(() => fetchTodos());
  }

  const renderTask = () => {
    return tabtask.map((item) => {
      return (
        <div key={item.id} className="task">
          {item.task}
          <button className="close" onClick={() => deleteTask(item.id)}>X</button>
        </div>
      );
    });
  }

  const resetTask = () => {
    for (let i = 0; i < tabtask.length; i++) {
      deleteTask(tabtask[i].id);
      }
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Header />
            <Inputtask change={changeTask} val={inputvalue} />
            <Buttonadd add={addTask} />
            <Buttonreset reset={resetTask} />
            <Todo todo={renderTask()} />
          </div>
        </div>
      </div>

    );
  }

  export default App;