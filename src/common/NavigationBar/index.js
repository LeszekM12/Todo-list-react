import { toAuthor, toTasks } from "../../core/routes";
import { Navigation, List, StyledNavLink } from "./styled";

export const NavigationBar = () => (
    <Navigation>
        <List>
            <StyledNavLink to={toTasks()} >Lista zadań</StyledNavLink>
            <StyledNavLink to={toAuthor()} >Autor</StyledNavLink>
        </List>
    </Navigation>
)