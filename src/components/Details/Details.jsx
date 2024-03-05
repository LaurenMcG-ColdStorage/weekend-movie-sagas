import { useHistory, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import './Details.css';
import Button from '@mui/material/Button';

function Details(){

    const history = useHistory();      //Lets us navigate components
    const location = useLocation();    //Lets us access data sent while navigating
    const dispatch = useDispatch();    //Lets us send requests to the store
    const movie = location.state       //Stores accessed data
    
    const genres = useSelector(store => store.genres); //Grabs the state data from our genres reducer.

    const handleNav = (event) => {
        history.push({ pathname: '/' }) //Go back to home on click
    };

    useEffect(() => {
        dispatch({type: 'FETCH_GENRES', payload: movie.id});
    },[])

    console.log(genres);
                                        //Renders out movie, with image, title, and details
    return(
        <div data-testid='movieDetails'>
            <h2>{movie.title}</h2>
            <img src={movie.poster}></img>
            <h4>Genres: {genres.map((genre) => {
                return (
                    <div>{genre.name}</div>
                )
            })}</h4>
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