import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import './Details.css';
import Button from '@mui/material/Button';

function Details(){

    const history = useHistory();      //Lets us navigate
    const location = useLocation();    //Lets us access data sent while navigating
    const movie = location.state       //Stores accessed data
    
    const handleNav = (event) => {
        history.push({ pathname: '/' }) //Go back to home on click
    }
                                        //Renders out movie, with image, title, and details
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