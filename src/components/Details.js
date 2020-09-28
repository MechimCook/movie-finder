import React from "react";

 async function getMovie(id) {
	const API_KEY = "644624460dcd621295212339eb7f478d";
	return await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
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
let thing = ""
    if (data) {
      const genres = data.genres.map(genre => <li>{genre.name}</li>);
      const title = data.title
      const tagline = data.tagline
      const rating = data.vote_average
      const votes = data.vote_count
      const description = data.overview
      const producedBy = data.production_companies.map(company => <li>{company.name}</li>);
      const producedIn = data.production_countries.map(country => <li>{country.name}</li>);
      const releaseDate = new Date(data.release_date);
      const runTime = `${Math.floor(data.runtime / 60)}:${data.runtime % 60}`;
      const languages = data.spoken_languages.map(language => <li>{language.name}</li>);
    thing =
    <div className="movie__detail">
    <h3>{title}</h3>
    <h4>{tagline}</h4>
    <div className="Stars" style={{"--rating": rating}} />
    <p>{`${votes} Votes`}</p>
    <img className="" src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} alt="not_found.jpg"/>

    <p>{description}</p>

      <ul id="genres">
      <li>Genres:</li>
      {genres}
      </ul>

      <ul id="genres">
      <li>Produced By:</li>
      {producedBy}
      </ul>

      <ul id="genres">
      <li>Produced In:</li>
      {producedIn}
      </ul>
      <ul id="genres">
      <li>Languages Spoken:</li>
      {languages}
      </ul>
      <h4>Release Date: {releaseDate.toDateString()}</h4>
      <h4>Run Time: {runTime}</h4>


    <button onClick={event =>  window.location.href=data.homepage}>Watch This Movie</button>

      </div>
  }
	return (
    <div className="movie__info">
    {thing}
     </div>
	)
}
}

export default Results;
