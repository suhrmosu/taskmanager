import React from 'react';

function TasksPage(client) {

    const fetchTodos = async () => {
        
        const { data: todos, errors } = await client.models.Todo.list();
        if (errors) {
            console.log(errors);
        }
        return (
        <div>
            <p>Task List</p>
            <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
        </div>)
    };
    const content = fetchTodos();
    return (content)
}
export default TasksPage;