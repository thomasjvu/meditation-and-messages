import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMessage } from '../features/messages/messageSlice'

function MessageForm() {

    const [text, setText] = useState("");

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault();

        dispatch(createMessage({text}))
        setText('')
    };

    return (
        <section className="form">
            <form onSubmit={onSubmit}>
                <div className="form-group">
                    <label htmlFor="text">Message</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button className="btn btn-block" type="submit">Add Message</button>
                </div>
            </form>
        </section>
    );
}

export default MessageForm;
