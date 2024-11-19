import { useSelector, useDispatch } from "react-redux";
import { axiosExampleTasks, selectLoading } from "../../tasksSlice";
import { Button } from "../Buttons/styled";

export default () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button 
        disabled={loading} 
        onClick={() => dispatch(axiosExampleTasks()) }>
            {
                loading ? "Ładowanie..." : "Pobierz przykładowe zadania"
            }
        </Button>
    );
};

