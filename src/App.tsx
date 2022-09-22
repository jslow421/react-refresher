import React from 'react';
import './App.scss';
import Todo from "./components/Todo";

function App() {
    return (
        <div className="App">
            <h1>My Todos</h1>
            <Todo text='Learn React'/>
            <Todo text='Master React'/>
            <Todo text='Explore the full React course'/>
        </div>
    );
}

export default App;
