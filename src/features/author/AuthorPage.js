import Container from "../../common/Container/styled";
import Header from "../../common/Header";
import Section from "../../common/Section";

export default () => (
    <Container>
      <Header title="Autor" />
      <Section 
        title="Leszek Mikrut" 
        body={<> Opis </>} 
      />
    </Container>
);

