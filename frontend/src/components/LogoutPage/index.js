import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/session";
import { Redirect } from "react-router-dom";

const LogoutFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to="/"/>;

    const handleLogout = async(e) => {
        e.preventDefault();
        try {
            await dispatch(logout())
            return (
                <>Successfully Logged out!!!</>
            )
        } catch (error) {
            console.log("something went wrong in handle logout", error);
        }
    }
    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default LogoutFormPage;