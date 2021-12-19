import React from 'react'

export default function Todo({ todo, toggletodo }) {

    function handle_toggle() {
        toggletodo(todo.id);
    }

    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.completed} onChange={handle_toggle} />
                {todo.text}
            </label>
        </div>
    )
}
