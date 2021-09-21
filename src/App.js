import{BrowserRouter as Router, Switch, Route} from "react-router-dom";

//@Pages
import HomePage from "./pages/homepage/home.page";

function App() {
  return (
   <Router>
     <Switch>
        <Route path="/" exact component={HomePage}/>
     </Switch>
   </Router>
  );
}

export default App;
