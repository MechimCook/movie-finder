import React from "react";
import CastAndCrew from "./CastAndCrew.js";
import DetailsBody from "./DetailsBody.js";
import Recommended from "./Recommended.js";

// gets movie id from url search query
// requests movie details from TMDB
// builds title and votes if availiable
// sends data to build details body
// sends credits to castAndCrew to build cast and crew
// sends recomendations to Recomendations to build recomendations

 async function getMovie(id) {
	const API_KEY = "644624460dcd621295212339eb7f478d";
	return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits,recommendations`)
		.then(response => response.json());
}

class Details extends React.Component {
	constructor () {
     super()
     this.state = {}
   }
	componentDidMount () {
		const queryString = require('query-string');
		const parsed = queryString.parse(this.props.location.search);
		getMovie(parsed.id)
		  .then(data => this.setState({data: data}) )
  }
  componentDidUpdate(prevProps) {
  // Typical usage (don't forget to compare props):
  if (this.props.location !== prevProps.location) {
    window.location.reload();
  }
}
  render() {

const data = this.state.data
let details = <div className="error-page center"><h3>Movie Not Found</h3></div>
    if (data && data.title) {
      const title = data.title;
      const tagline = data.tagline
      const rating = data.vote_average
      const votes = data.vote_count
      details =
        <div>
          <h3>{title}</h3>
          <h4>{tagline}</h4>
          <div className="Stars" style={{"--rating": rating}} />
          <p>{`${votes} Votes`}</p>

          <DetailsBody
            backdropPath={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`}
            description={data.overview}
            genres={data.genres}
            producedBy={data.production_companies}
            producedIn={data.production_countries}
            languages={data.spoken_languages}
            releaseDate={data.release_date}
            runTime={data.runtime}
            homePage={data.homepage}
            />
          <CastAndCrew
          castAndCrew={data.credits}
          />
          <Recommended
            results={data.recommendations.results}
          />

        </div>
    }
	return (
    <div className="movie__info">
        <div className="movie__detail">
          {details}
        </div>
     </div>

	)
}
}

export default Details;
