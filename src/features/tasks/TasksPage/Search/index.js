import { Input, StyledInput } from "./styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../../../queryParameters";

export default () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target }) => {
        replaceQueryParameter({
            key: "szukaj",
            value: target.value.trim() !== "" 
            ? target.value : undefined,
        });
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