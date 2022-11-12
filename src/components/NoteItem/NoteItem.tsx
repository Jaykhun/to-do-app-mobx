import React from 'react';
import {observer} from "mobx-react-lite";
import {NoteItemProps} from "../../store/types";
import ToDoStore from "../../store/ToDoStore";
import './NoteItem.css'

const NoteItem: React.FC<NoteItemProps> = observer(({note}) => {
    const {removeNote, completeNote} = ToDoStore
    const {id, text, isDone} = note

    const handleDelete = () => {
        removeNote(id)
    }

    const handleComplete = () => {
        completeNote(note)
    }

    return (
        <div className="todo-notes__item">
            <input
                id={id}
                type="checkbox"
                checked={note.isDone}
                onChange={handleComplete}
            />
            <label className={`${isDone ? 'done' : ''}`} htmlFor={id}>{text}</label>
            <button onClick={handleDelete}><i className="fa fa-trash-o"></i></button>
        </div>
    );
});

export default NoteItem;