import Container from "../../common/Container/styled";
import Header from "../../common/Header/index";
import Section from "../../common/Section";

const AuthorPage = () => (
    <Container>
        <Header title="Author" />
        <Section
            title="Leszek Mikrut"
            body={<>Leszek Mikrut</>}
        />
    </Container>
);

export default AuthorPage;
