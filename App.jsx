import React from 'react'
import ToDoItem from './ToDoItem'
import todosData from './todosData'

function App() {
    const toDoComponents = todosData.map(item => <ToDoItem id={item.id} item={item}/>)
    return(
        <div className = "todo-list">
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        <ToDoItem/>
        </div>
    )
}

export default App