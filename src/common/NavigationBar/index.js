import { toAuthor, toTasks } from "../../routes";
import { Navigation, List, StyledNavLink } from "./styled";

export const NavigationBar = () => (
    <Navigation>
        <List>
            <StyledNavLink to={toTasks()} >Lista zadań</StyledNavLink>
            <StyledNavLink to={toAuthor()} >Autor</StyledNavLink>
        </List>
    </Navigation>
)