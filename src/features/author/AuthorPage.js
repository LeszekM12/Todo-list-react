import Container from "../../common/Container/styled.tsx";
import Header from "../../common/Header/index.tsx";
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

