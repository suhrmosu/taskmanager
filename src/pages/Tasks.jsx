import React from 'react';
import { generateClient } from 'aws-amplify/data';

function TasksPage() {
    /**
     * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
     */
    const client = generateClient();

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