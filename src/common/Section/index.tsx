import { StyledSection, Header, Body  } from "./styled";
import {ReactNode} from "react";

interface SectionProps {
    title: ReactNode;
    body: ReactNode;
    extraHeaderContent?: ReactNode;
}

const Section = ({ title, body, extraHeaderContent } : SectionProps) => (
  <StyledSection>
    <Header>
      <h2>{title}</h2>
      {extraHeaderContent}
    </Header>
    <Body>
      {body}
    </Body>
  </StyledSection>
);

export default Section;
