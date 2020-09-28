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
let details = ""
    if (data) {
      const title = data.title;
      const tagline = data.tagline
      const rating = data.vote_average
      const votes = data.vote_count
      const description = data.overview

      const genres = data.genres.length > 0 ?
      <div>Genres: {data.genres.map(genre => genre.name).join(', ')}</div> : null;

      const producedBy = data.production_companies.length > 0 ?
      <div>Produced By: {data.production_companies.map(company => company.name).join(', ')}</div> : null;

      const producedIn = data.production_countries.length > 0 ?
      <div> Produced In: {data.production_countries.map(country => country.name).join(', ')}</div> : null;

      const languages = data.spoken_languages.length > 0 ?
       <div >Languages Spoken: {data.spoken_languages.map(language => language.name).join(', ')}</div> : null;

      const releaseDate = data.release_date ?
      <h4>Release Date: {new Date(data.release_date).toDateString()}</h4> : null;

      const runTime = data.runtime ?
      <h4>Run Time: {`${Math.floor(data.runtime / 60)}:${data.runtime % 60}`}</h4> : null;

      const homePage = data.homepage === "" ? null :
          <button onClick={event => window.location.href=data.homepage}>Watch This Movie</button>

      const castAndCrew = data.credits

      const cast = castAndCrew.cast.length > 0 ?
      <div>
      <h4>Cast</h4>
      {castAndCrew.cast.map(actor =>
        <div className="actor-card" key= {`${actor.name}${actor.character}`}>
          <img className="icon" src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="icon" />
            <div className="card-body">
              <h5 >{actor.name} as {actor.character}</h5>
            </div>
        </div>)}
      </div> : null ;


        const crew = castAndCrew.crew.length > 0 ?
        <div>
        <h4>Crew</h4>
        {castAndCrew.crew.map(member =>
          <div className="actor-card" key= {`${member.name}${member.job}`}>
            <img className="icon" src={`https://image.tmdb.org/t/p/original${member.profile_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="icon" />
              <div className="card-body">
                <h5 >{member.job}: {member.name}</h5>
              </div>
          </div>)}
        </div> : null;

    details =
    <div className="movie__detail">
    <h3>{title}</h3>
    <h4>{tagline}</h4>
    <div className="Stars" style={{"--rating": rating}} />
    <p>{`${votes} Votes`}</p>
    <img className="detail-img" src={`https://image.tmdb.org/t/p/w500${data.backdrop_path}`} onError={(e)=>{e.target.onerror = null;}} alt=""/>

    <p className="detail-desc">{description}</p>
    {genres}
    {producedBy}
    {producedIn}
    {languages}
    {releaseDate}
    {runTime}
    {homePage}
    {cast}
    {crew}
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
