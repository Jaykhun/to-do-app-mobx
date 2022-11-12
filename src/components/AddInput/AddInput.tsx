import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import key from 'react-key-string';
import toDo from "../../store/ToDoStore";
import "./AddInput.css"

const AddInput = observer(() => {
    const [inputValue, setInputValue] = useState('')

    const handleAddNote = () => {
        if (inputValue.length > 3) {
            toDo.addNote({id: key.generate(), text: inputValue, isDone: false})
            setInputValue('')
        } else alert('At least four words should be in your note')
    }

    return (
        <div className="todo__add-input">
            <input
                type="text"
                placeholder="Your note..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={handleAddNote}>Add Note</button>
        </div>
    );
});

export default AddInput;