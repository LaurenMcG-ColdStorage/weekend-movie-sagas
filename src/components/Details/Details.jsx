import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Details(){

    const location = useLocation();
    const movie = location.state
    console.log(movie);
    return(
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster}></img>
            <p>{movie.description}</p>
        </div>
    )
};

export default Details;