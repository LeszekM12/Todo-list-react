import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { Input, StyledInput } from "./styled";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get("szukaj");

    const onInputChange = ({ target }) => {
        const searchParams = new URLSearchParams(location.search);
        
        if(target.value.trim() === ""){
            searchParams.delete("szukaj");
        } else {
            searchParams.set("szukaj", target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    };

    return (
      <StyledInput>
        <Input
            placeholder="Wyszukaj zadanie"
            value={query || ""}
            onChange={onInputChange}
        />
      </StyledInput>
    )
};