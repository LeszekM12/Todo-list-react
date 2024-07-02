import { StyledSection, Header, Body  } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (
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
