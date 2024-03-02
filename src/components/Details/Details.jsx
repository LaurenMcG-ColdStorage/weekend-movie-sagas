import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Details(){

    const history = useHistory();
    const location = useLocation();
    const movie = location.state
    
    const handleNav = (event) => {
        history.push({ pathname: '/' })
    }

    return(
        <div data-testid='movieDetails'>
            <h3>{movie.title}</h3>
            <img data-testid="toList" src={movie.poster} onClick={(event) => handleNav(event)}></img>
            <p>{movie.description}</p>
        </div>
    )
};

export default Details;