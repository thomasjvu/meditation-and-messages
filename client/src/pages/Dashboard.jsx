import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import MessageForm from "../components/MessageForm.jsx"

function Dashboard() {
    const navigate = useNavigate();
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    return (
        <>
            <section className="heading">
                <h1>Welcome {user && user.name}</h1>
                <p>Message List Dashboard</p>
                <MessageForm />
            </section>
        </>
    );
}

export default Dashboard;
