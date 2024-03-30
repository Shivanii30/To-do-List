import React,{useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState{''}


  return (
    <div>
      <form className="todo-form"></form>
      <input type="text" 
      placeholder='Enter Task' 
      value={input} 
      name='text'
      className='todo-input' />

      <button className='todo-button'>Add Task</button>
    </div>
  )
}

export default TodoForm

