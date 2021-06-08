import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Money from "views/Money";
import NoMatch from "views/NoMatch";
import Statistics from "views/Statistics";
import { TagEdit } from "views/TagEdit";
import Tags from "views/Tags";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/tags/:tag">
          <TagEdit />
        </Route>
        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
          <Statistics />
        </Route>
        <Redirect exact from="/" to="money" />
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}


export default App