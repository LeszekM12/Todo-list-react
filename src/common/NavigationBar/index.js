import { Navigation, List, StyledLink } from "./styled";

export const NavigationBar = () => (
    <Navigation>
        <List>
            <StyledLink to="/tasks" >Lista zadań</StyledLink>
            <StyledLink to="/author" >Autor</StyledLink>
        </List>
    </Navigation>
)