import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
      <Header title="O autorze" />
      <Section 
        title="Autor" 
        body={<> Opis autora </>} 
      />
    </Container>
);

