import { HashRouter, Switch, Route, Redirect } from "react-router-dom"; 
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { NavigationBar } from './common/NavigationBar';

export const App = () => (
  <HashRouter>
    <NavigationBar />
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
  </HashRouter>
);
