import React from "react";
import Movie from "./Movie";
import PageSelect from "./PageSelect";
// pulls query and page from url search params
// requests movies from TMDB using query and page
// displays number of reuslts
// builds page select with page information from response
// builds movie cards for each movie object found


async function getResults(query, page) {
  const API_KEY = "644624460dcd621295212339eb7f478d";
	return await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`)
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
		.then(data => this.setState({ data: data , query: parsed.query}) )
  }


  render() {
		const { data } = this.state
    var movieArr = []
    var page = 1
    var lastPage = 1
    var pageSelect = ""
    var totalResults = "No Results Found"

//  check if data is in yet
		if (data) {
      var results = data.results
      page = data.page
      lastPage = data.total_pages

      // build results if there are any
      if (results) {
        const resultsNumber = results.length
        totalResults = resultsNumber === 1 ? `1 Result Found` :
          `${data.total_results} Results Found`;
        if (lastPage > 1) {
          pageSelect =
            <PageSelect
              page={page}
              query={this.state.query}
              lastPage={lastPage}
              target={"movies"}
            />
        }
        for (var i = 0; i < resultsNumber; i++) {
          movieArr.push(
            <Movie
					       key={i}
                 title = {results[i].title}
						     overview = {results[i].overview}
                 rating = {results[i].vote_average}
                 votes = {results[i].vote_count}
                 id = {results[i].id}
						     image = {results[i].poster_path}
            />
        )
      }
    }
  }
	return (
    <div className="movie__info">
      <h3 className="no-results-found">{totalResults}</h3>
      {pageSelect}
      <div>{movieArr}</div>
      {pageSelect}
      </div>
	)
}
}

export default Results;
