import { StyledHeader } from './styled';
import {ReactNode} from "react";

interface HeaderProps {
    title: ReactNode;
}

const Header = ({ title }: HeaderProps) => (
    <StyledHeader>{title}</StyledHeader>
);

export default Header;