
function Details(movie){

    return(
        <div>
            <h3>{movie.title}</h3>
            <img src={movie.poster}></img>
            <p>{movie.description}</p>
        </div>
    )
};

export default Details;