import React from "react";
import Movie from "./Movie";
// takes a list of movie objects
// builds a horizontal scroll wrapper
// builds movie cards for each movie object
// if ther is no movies returns null

class Recommended extends React.Component {
  render() {

    const results = this.props.results
    if (results) {
      const recommended = results.length > 0 ?
        <div >
          <h4>Recomendations</h4>
            <div className="scroller-wrapper">
              <div className="scroller">
                {results.map(movie =>
                  <div className="elem" key={movie.title}>
                    <Movie
                    key={movie.title}
                    title = {movie.title}
                    overview = {movie.overview}
                    rating = {movie.vote_average}
                    votes = {movie.vote_count}
                    id = {movie.id}
                    image = {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    />
                  </div>)}
                </div>
              </div>
            </div> : null ;

      return (
    	  <div>
         {recommended}
        </div>
      );
    }
  }
}

export default Recommended;
