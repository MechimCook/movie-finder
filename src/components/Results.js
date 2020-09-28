import React from "react";
import Movie from "./Movie";
import PageSelect from "./PageSelect";



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
      if (results && lastPage > 1) {
        totalResults = `${data.total_results} Results Found`
         pageSelect =  <PageSelect
                    page={page}
                    query={this.state.query}
                    lastPage={lastPage}
                    target={"movies"}
                    />
        for (var i = 0; i < results.length; i++) {
          movieArr.push(
            <Movie
					       key={i}
                 title = {results[i].title}
						     overview = {results[i].overview}
                 rating = {results[i].vote_average}
                 votes = {results[i].vote_count}
						     image = {`https://image.tmdb.org/t/p/w500${results[i].poster_path}`}
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
