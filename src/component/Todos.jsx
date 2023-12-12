import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Todos = () => {


    const [Todos, setTodos] = useState([])
    
    var getTodosFunc = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setTodos(data))
    }
    useEffect(() => {
        getTodosFunc()
    }, [])
    return (
          <>
          <h1 className='text-center'>Todos</h1>
          {console.log(Todos)}
            {
                Todos.map(item => 
                        <div className="d-flex align-items-center border m-1 p-1 bg-dark text-light">
                            <input type="checkbox"  checked={item.completed} />
                            <p className='m-0 mx-2'>{item.id}. {item.title}</p>
                        </div>
               )
            }
            </>
    )
}
export default Todos