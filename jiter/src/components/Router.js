import {HashRouter as Router, Route, Routes} from "react-router-dom"
import {useState} from "react"
import Auth from "../routes/Auth"
import Home from "../routes/Home"
import EditProfile from "../routes/EditProfile"
import Profile from "../routes/Profile"

const AppRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    return(
        <Router>
            <Routes>
                {isLoggedIn ? (
                    <Route exact path="/" element={<Home />}>

                    </Route>
                ) : (
                    <Route exact path="/" element={<Auth />}>

                    </Route>
                )}
            </Routes>
        </Router>
    );
};

export default AppRouter;