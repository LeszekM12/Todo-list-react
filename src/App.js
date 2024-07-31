import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom"; 
import TasksPage from "./features/tasks/TasksPage";
import Author from "./features/author/Author";

export const App = () => (
  <HashRouter>
    <nav>
      <ul>
        <li>
          <Link to="/tasks">Lista zadań</Link>
        </li>
        <li>
          <Link to="/author">Autor</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/author">
          <Author/>
        </Route>
          <Redirect to="/tasks" />
      </Switch>
    </nav>
  </HashRouter>
);
