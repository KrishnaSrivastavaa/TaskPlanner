import React, { useEffect, useState } from 'react'




export const Todos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        
        const fetchTodos = async () => {
            try {
                const token = localStorage.getItem('jwtToken'); // Retrieve token from localStorage
                
                if (!token) {
                    throw new Error('No token found');
                }

                const res = await fetch("http://localhost:3000/user/mytodos", {
                    headers: {
                        'Authorization': `Bearer ${token}` // Replace with your actual JWT token
                    }
                });

                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }

                const data = await res.json();
                setTodos(data);
                console.log(todos)
            } catch (error) {
                console.error("Error fetching todos:", error);
            }
        }

        fetchTodos();
    
    },[])
    
  return (
    <>
   
            <h1>Todos</h1>
            <ul>
                {todos.map(todo => (
                    <li key={todo._id}>{todo.title}: {todo.description}</li>
                ))}
            </ul>
      
    </>
  )
}
