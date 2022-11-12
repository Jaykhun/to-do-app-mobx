import AddInput from "./components/AddInput/AddInput";
import NoteBody from "./components/NoteBody/NoteBody";
import './App.css'

const App = () => {
    return (
        <div className="todo">
            <AddInput/>
            <NoteBody/>
        </div>
    );
}

export default App;