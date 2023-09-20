// src/components/TodoList.js

import React, { useState } from 'react';

function TodoList() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || []);
    const [newTodo, setNewTodo] = useState('');
    const [editTodo, setEditTodo] = useState({ id: null, value: '' });

    const handleAddTodo = () => {
        const newTodos = [...todos, { id: Date.now(), value: newTodo, completed: false }];
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
        setNewTodo('');
    };

    const handleCheckboxChange = (id) => {
        const updatedTodos = todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleDeleteTodo = (id) => {
        const updatedTodos = todos.filter(todo => todo.id !== id);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
    };

    const handleEditTodo = (id) => {
        const todoToEdit = todos.find(todo => todo.id === id);
        setEditTodo(todoToEdit);
    };

    const handleSubmitEdit = () => {
        const updatedTodos = todos.map(todo => todo.id === editTodo.id ? editTodo : todo);
        setTodos(updatedTodos);
        localStorage.setItem('todos', JSON.stringify(updatedTodos));
        setEditTodo({ id: null, value: '' });
    };

    const handleCancelEdit = () => {
        setEditTodo({ id: null, value: '' });
    };

    return (
        <div>
            <input data-testid="new-todo-input" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
            <button data-testid="new-todo-add-button" onClick={handleAddTodo}>추가</button>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <label>
                            <input type="checkbox" checked={todo.completed} onChange={() => handleCheckboxChange(todo.id)} />
                            <span>{editTodo.id === todo.id ? 
                                <input data-testid="modify-input" value={editTodo.value} onChange={(e) => setEditTodo({ ...editTodo, value: e.target.value })} /> : todo.value}
                            </span>
                        </label>
                        {editTodo.id === todo.id ? (
                            <>
                                <button data-testid="submit-button" onClick={handleSubmitEdit}>제출</button>
                                <button data-testid="cancel-button" onClick={handleCancelEdit}>취소</button>
                            </>
                        ) : (
                            <>
                                <button data-testid="modify-button" onClick={() => handleEditTodo(todo.id)}>수정</button>
                                <button data-testid="delete-button" onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
