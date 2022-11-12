import ToDoStore from "../../store/ToDoStore";
import NoteItem from "../NoteItem/NoteItem";
import {observer} from "mobx-react-lite";
import "./NoteBody.css"

const NoteBody = observer(() => {
    const {todos} = ToDoStore

    return (
        <div className="todo-notes">
            {
                todos.length > 0
                    ? todos.map(item => <NoteItem key={item.id} note={item}/>)
                    : <p className="message">There are no notes</p>
            }
        </div>
    );
});

export default NoteBody;