import { useDispatch } from "react-redux";
import { deleteNote } from "../features/notes/noteSlice"

function NoteItem({ note }) {

    const dispatch = useDispatch()

    return (
        <div className="note">
            <div>{new Date(note.createdAt).toLocaleString("en-US")}</div>
            <h2>{note.text}</h2>
            <button className="close" onClick={() =>dispatch(deleteNote(note._id))}>X</button>
        </div>
    );
}

export default NoteItem;
