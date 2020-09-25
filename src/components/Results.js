import React from "react";
import Movie from "./Movie";



 async function getResults(query, page) {

	const API_KEY = "644624460dcd621295212339eb7f478d";
	return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&appid=${API_KEY}&page=${page}&include_adult=false`)
		.then(response => response.json());
}

class Results extends React.Component {
	constructor () {
     super()
     this.state = {}
   }
	componentDidMount () {
		const queryString = require('query-string');
		const parsed = queryString.parse(this.props.location.search);
		getResults(parsed.query, parsed.page)
		.then(data => this.setState({ data: data }) )

  }


  render() {
		const { data } = this.state
		if (data) {
		var results = data.results
    var movieArr = []

    for (var i = 0; i < results.length; i++) {
        movieArr.push(
          <Movie
					  key={i}
            title = {results[i].title}
						overview = {results[i].overview}
						image = {`https://image.tmdb.org/t/p/w500${results[i].poster_path}`}
            />
        )

    }

  }
	return (
		<div className="movie__info">
			{movieArr}
			</div>
	)
}
}

export default Results;
