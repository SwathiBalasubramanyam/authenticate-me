import { Switch, Route} from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
// import heroVideo from "./videos/team-discussing.f297e895ab90931aaa90.mp4"

function App() {
  return (
    <Switch>
      <Route path="/login"> <LoginFormPage /></Route>
      {/* <h1>Hello from video
        <aside>
          <video src={heroVideo} autoPlay loop muted ></video>
        </aside>

      </h1> */}
        
    </Switch>
  );
}

export default App;
