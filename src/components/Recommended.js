import React from "react";
import Movie from "./Movie";
import Scroll from './Scroll.js';
// takes a list of movie objects
// builds movie cards for each movie object
// if ther is no movies returns null

class Recommended extends React.Component {
  render() {

    const results = this.props.results
    if (results) {
      const recommended = results.length > 0 ?
        <div >
          <h4>Recomendations</h4>
            <Scroll>
              {results.map(movie =>
                <div className="elem" key={movie.title}>
                  <Movie
                    key={movie.title}
                    title = {movie.title}
                    overview = {movie.overview}
                    rating = {movie.vote_average}
                    votes = {movie.vote_count}
                    id = {movie.id}
                    image = {movie.poster_path}
                  />
                </div>)}
              </Scroll>
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
