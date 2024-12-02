import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";

export const useQueryParameter = (key: string)  => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get(key);
}


export const useReplaceQueryParameter = () => {
    const location = useLocation();
    const history = useHistory();

    return({ key, value }: {key: string; value: string | undefined}) => {
        const searchParams = new URLSearchParams(location.search);
        
        if(value === undefined){
            searchParams.delete(key);
        } else {
            searchParams.set(key, value);
        }

        const newSearch = searchParams.toString();
        history.push(`${location.pathname}?${newSearch}`);
    }
};
