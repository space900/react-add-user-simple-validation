import React from "react"

function TodoList({ todo, setTodo}) {

    function deleteTodo(key) {
        let newTodo = [...todo].filter(item => item.key !== key)
        setTodo(newTodo)
    }

    return (
        <div className="items">
            <h2>Список юзеров</h2>
            {
                todo.map( item => (
                    <div key={item.key}>
                        <div className="item">
                            <p>Имя пользователя: {item.title}</p>
                            <p className="age">Возраст: {item.age} года</p>
                            <button onClick={()=>deleteTodo(item.key)}>Удалить</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default TodoList
