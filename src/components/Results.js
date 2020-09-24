import React from "react";
import Movie from "./Movie";

class Results extends React.Component {
  render() {
		if (this.props.results !== undefined) {


		var results = this.props.results
    var movieArr = []

    for (var i = 0; i < results.length; i++) {
        movieArr.push(
          <Movie
            title = {results[i].title}
						overview = {results[i].overview}
						image = {`https://image.tmdb.org/t/p/w500${results[i].poster_path}`}
            />
        )

    }
    return (
      <div className="n">
        {movieArr}
        </div>
    )
  }
	else {
		return (
		<div className="movie__info">
		 {
		 <p className="movie__error">{ this.props.error }</p>
		 }
		</div>
	)
	}
}
}

export default Results;
