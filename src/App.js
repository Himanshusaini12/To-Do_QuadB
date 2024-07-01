import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import TaskInput from './components/TaskInput/TaskInput';
import TaskList from './components/TaskList/TaskList';
import AuthButton from './components/AuthButton/AuthButton';

function App() {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return (
    <div className="App">
      <h3>TODO List</h3>
      <AuthButton />
      {isLoggedIn && (
        <>
          <TaskInput />
          <TaskList />
        </>
      )}
    </div>
  );
}

export default App;
