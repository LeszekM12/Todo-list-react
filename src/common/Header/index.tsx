import { StyledHeader } from './styled.tsx';
import {ReactNode} from "react";

interface HeaderProps {
    title: ReactNode;
}

const Header = ({ title }: HeaderProps) => (
    <StyledHeader>{title}</StyledHeader>
);

export default Header;