import {makeAutoObservable} from "mobx";
import {noteState} from "./types";

class ToDoStore {
    todos: noteState[] = []

    constructor() {
        makeAutoObservable(this)
    }

    addNote = (note: noteState) => {
        this.todos.push(note)
    }

    removeNote = (id: string) => {
        this.todos = this.todos.filter(todo => todo.id !== id)
    }

    completeNote = (note: noteState) => {
        note.isDone = !note.isDone
    }
}

export default new ToDoStore()