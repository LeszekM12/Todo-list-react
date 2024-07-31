import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom"; 
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

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
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage/>
        </Route>
          <Redirect to="/tasks" />
      </Switch>
    </nav>
  </HashRouter>
);
