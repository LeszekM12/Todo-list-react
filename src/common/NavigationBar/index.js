import { Navigation, List, StyledNavLink } from "./styled";

export const NavigationBar = () => (
    <Navigation>
        <List>
            <StyledNavLink to="/tasks" >Lista zadań</StyledNavLink>
            <StyledNavLink to="/author" >Autor</StyledNavLink>
        </List>
    </Navigation>
)