import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './Details.css';
import Button from '@mui/material/Button';

function Details(){

    const history = useHistory();
    const location = useLocation();
    const movie = location.state
    
    const handleNav = (event) => {
        history.push({ pathname: '/' })
    }

    return(
        <div data-testid='movieDetails'>
            <h2>{movie.title}</h2>
            <img src={movie.poster}></img>
            <p>{movie.description}</p>
            <Button data-testid="toList" 
                    onClick={(event) => handleNav(event)}
                    variant='contained'
                    sx={{
                        backgroundColor: '#7fffd4',
                        color: '#686868',
                        ':hover':{ backgroundColor: '#5dddb2'}
                    }}>Back to Movie List</Button>
        </div>
    )
};

export default Details;