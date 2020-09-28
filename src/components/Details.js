import React from "react";
import CastAndCrew from "./CastAndCrew.js";
import DetailsBody from "./DetailsBody.js";

 async function getMovie(id) {
	const API_KEY = "644624460dcd621295212339eb7f478d";
	return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=credits`)
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
		getMovie(parsed.id)
		.then(data => this.setState({data: data}) )
  }


  render() {

const data = this.state.data
let details = ""
    if (data) {
      const title = data.title;
      const tagline = data.tagline
      const rating = data.vote_average
      const votes = data.vote_count
    details =
    <div className="movie__detail">
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
    </div>
  }
	return (
    <div className="movie__info">
    {details}
     </div>
	)
}
}

export default Results;
