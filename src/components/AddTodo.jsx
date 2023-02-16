import React, {useEffect, useState} from "react"
import uuid from 'react-uuid';

function AddTodo({todo, setTodo, setIsPopupOpen, setIsErrorList}) {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [isName, setIsName] = useState(false)
    const [isAge, setIsAge] = useState(false)
    const [nameError, setNameError] = useState('Имя обязательно для заполнения')
    const [ageError, setAgeError] = useState('Возраст обязателен для заполнения')
    const [formValid, setFormValid] = useState(false)

    useEffect( () => {
        if (nameError || ageError) {
            setIsErrorList([nameError, ageError])
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [nameError, ageError])

    function saveTodo(e) {
        e.preventDefault()
        if (formValid){
            setTodo(
                [...todo, {
                    key: uuid(),
                    title: name,
                    age: age,
                    status: true,
                }]
            )
            setName('')
            setAge('')

        } else {
            setIsPopupOpen(true)
        }
    }

    function handleNameChange(e) {
        setName(e.target.value)
        const reg = /[a-zA-Z-а-я]+/g;
        if(!reg.test(String(e.target.value).toLowerCase()) || e.target.value.length <= 2) {
            setNameError('Укажите имя (не короче трех символов)')
        } else {
            setNameError('')
        }
    }

    function handleAgeChange(e) {
        setAge(e.target.value)
        const reg = /^\d+$/;
        if(!reg.test(String(e.target.value)) || e.target.value === '0' || e.target.value > 125) {
            setAgeError('Укажите возраст от 1 до 125 лет')
            if ((!e.target.value)) {
                setAgeError('Поле не может быть пустым')
            }
        } else {
            setAgeError('')
        }
    }

    return (
        <div className="form">
            <form>
                <h1>Добавление юзера</h1>
                {(isName && nameError) && <span className="error">{nameError}</span>}
                <input placeholder="Имя"
                       name="name"
                       required
                       onChange={handleNameChange}
                       type="text"
                       minLength="2"
                       maxLength="15"
                       value={name}
                />
                {(isAge && ageError) && <span className="error">{ageError}</span>}
                <input placeholder="Возраст"
                       name="age"
                       required
                       onChange={handleAgeChange}
                       type="number"
                       min="1"
                       max="125"
                       value={age}
                />
                <button onClick={saveTodo}>Добавить пользователя</button>
            </form>
        </div>
    )
}

export default AddTodo
