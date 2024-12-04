import {Input, StyledForm} from "../Form/styled";
import { useQueryParameter, useReplaceQueryParameter } from "../../../../queryParameters";

export default () => {
    const query = useQueryParameter("szukaj");
    const replaceQueryParameter = useReplaceQueryParameter();

    const onInputChange = ({ target}: React.ChangeEvent<HTMLInputElement>) => {
        replaceQueryParameter({
            key: "szukaj",
            value: target.value.trim() !== "" 
            ? target.value : undefined,
        });
    };

    return (
      <StyledForm>
        <Input
            placeholder="Wyszukaj zadanie"
            value={query || ""}
            onChange={onInputChange}
        />
      </StyledForm>
    )
};