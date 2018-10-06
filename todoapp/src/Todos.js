import React from 'react';

const Todos = ({todos, deleteTodo}) => {


    let todoList;
    if (!todos.length) {
        todoList = <p className="center">You have no todo's left...</p>;
    } else {
        todoList = todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
                </div>
            );
        });
    }

    return (
        <div className="todos collection">
            {todoList}
        </div>
    );
};

export default Todos;