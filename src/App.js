import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom"; 
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/zadania">Zadania</Link>
        </li>
        <li>
          <Link to="/autor">Autor</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/zadania">
          <TasksPage />
        </Route>
        <Route path="/autor">
          <Author/>
        </Route>
          <Redirect to="/zadania" />
      </Switch>
    </nav>
  </HashRouter>
);
