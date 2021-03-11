

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import AllTeams from "./components/allTeams/AllTeams";
import NotFound from "./components/notFound/NotFound";
import TeamDetail from "./components/teamDetail/TeamDetail";

function App() {
  return (
   
    <Router>
        <Switch>
          
      <Route exact path="/">
        <AllTeams />
      </Route>

      <Route path="/team/:id">
        <TeamDetail />
      </Route>

      <Route path="*">
        <NotFound />
      </Route>

      </Switch>
    </Router>
  );
}

export default App;
