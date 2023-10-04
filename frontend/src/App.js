import { Switch, Route} from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignUpFormPage from "./components/SignUpForm";
import HomePage from "./components/HomePage";
import LogoutFormPage from "./components/LogoutPage";

function App() {
  return (
    <Switch>
      <Route path="/login"> <LoginFormPage/></Route>
      <Route path="/signup"> <SignUpFormPage/></Route>
      <Route path="/logout"><LogoutFormPage/></Route>
      <Route path="/"><HomePage/></Route>  
    </Switch>
  );
}

export default App;
