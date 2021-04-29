import { Link } from 'react-router-dom';

function MovieCard({movie}) {
    return (
        <div className="movie">
            <div className="movie-poster">
                {/* Add a check here to see if there is no poster*/}
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Godzilla vs Kong"></img>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                {/* Not the correct location... for demo only */}
                <Link to='/'>More Info</Link>
            </div>
        </div>
    )
}

export default MovieCard;