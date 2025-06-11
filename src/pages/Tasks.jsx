import React from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';

function TasksPage() {
    Amplify.configure()
    /**
     * @type {import('aws-amplify/data').Client<import('../amplify/data/resource').Schema>}
     */
    const client = generateClient();

    const fetchTodos = async () => {
        
        const { data: todos, errors } = await client.models.Todo.list();
        if (errors) {
            console.log(errors);
            return (<p>Empty List</p>)
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