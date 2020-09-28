import React from "react";
import defaultImage from '../images/default-user-icon-6.jpg';


class CastAndCrew extends React.Component {
  render() {
    const castAndCrew = this.props.castAndCrew

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

    return (
    	<div>
      {cast}
      {crew}
      </div>
    );
  }
	}

export default CastAndCrew;
