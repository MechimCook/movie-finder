import React from "react";
import defaultImage from '../images/default-user-icon-6.jpg';

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
let thing = ""
    if (data) {
      const genres = data.genres.map(genre => genre.name).join(', ');
      const title = data.title;
      const tagline = data.tagline
      const rating = data.vote_average
      const votes = data.vote_count
      const description = data.overview
      const producedBy = data.production_companies.map(company => company.name).join(', ');
      const producedIn = data.production_countries.map(country => country.name).join(', ');
      const releaseDate = new Date(data.release_date);
      const runTime = `${Math.floor(data.runtime / 60)}:${data.runtime % 60}`;
      const languages = data.spoken_languages.map(language => language.name).join(', ');
      const homePage = data.homepage === "" ? null :
          <button onClick={event => window.location.href=data.homepage}>Watch This Movie</button>

      const castAndCrew = data.credits
      const cast = castAndCrew.cast.map(actor =>
        <div className="actor-card" key= {actor.name}>
          <img className="icon" src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="icon" />
            <div className="card-body">
              <h5 >{actor.name} as {actor.character}</h5>
            </div>
        </div>);
        const crew = castAndCrew.crew.map(member =>
          <div className="actor-card" key= {member.name}>
            <img className="icon" src={`https://image.tmdb.org/t/p/original${member.profile_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="icon" />
              <div className="card-body">
                <h5 >{member.job}: {member.name}</h5>
              </div>
          </div>);
    thing =
    <div className="movie__detail">
    <h3>{title}</h3>
    <h4>{tagline}</h4>
    <div className="Stars" style={{"--rating": rating}} />
    <p>{`${votes} Votes`}</p>
    <img className="detail-img" src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} onError={(e)=>{e.target.onerror = null;}} alt=""/>

    <p className="detail-desc">{description}</p>

      <div>Genres: {genres}</div>

      <div>Produced By: {producedBy}</div>

      <div> Produced In: {producedIn}</div>

      <div >Languages Spoken: {languages}</div>

      <h4>Release Date: {releaseDate.toDateString()}</h4>
      <h4>Run Time: {runTime}</h4>

      {homePage}
    <div>
    <h4>Cast</h4>
    {cast}
    </div>
    <div>
    <h4>Crew</h4>
    {crew}
    </div>
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
