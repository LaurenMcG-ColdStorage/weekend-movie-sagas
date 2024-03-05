import { useDispatch } from "react-redux";

function GenrePull(){

    const dispatch = useDispatch();
    dispatch({type: 'FETCH_GENRES'});
}

export default GenrePull