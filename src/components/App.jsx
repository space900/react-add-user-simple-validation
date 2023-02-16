import React, { useState } from "react";
import '../App.css';
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Popup from "./Popup";

function App() {
    const [isPopupOpen, setIsPopupOpen] = useState(false)
    const [todo, setTodo] = useState([
        ]);
    const [errorList, setIsErrorList] = useState([])

  return (
    <div className="App">
        <Popup errorList={errorList} isPopupOpen={isPopupOpen} setIsPopupOpen={setIsPopupOpen} />
        <AddTodo setIsErrorList={setIsErrorList} todo={todo}  setTodo={setTodo} setIsPopupOpen={setIsPopupOpen}/>
        <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
