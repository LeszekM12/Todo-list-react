import { HashRouter, Switch, Route, Redirect } from "react-router-dom"; 
import TasksPage from "../features/tasks/TasksPage";
import TaskDetails from "../features/tasks/TaskDetails";
import AuthorPage from "../features/author/AuthorPage";
import { NavigationBar } from '../common/NavigationBar';
import { toTasks, toAuthor, toTask } from "./routes";

export const App = () => (
  <HashRouter>
    <NavigationBar />
      <Switch>
        <Route path={toTask()}>
          <TaskDetails />
        </Route>
        <Route path={toTasks()}>
          <TasksPage />
        </Route>
        <Route path={toAuthor()}>
          <AuthorPage/>
        </Route>
          <Redirect to={toTasks()}/>
      </Switch>
  </HashRouter>
);
