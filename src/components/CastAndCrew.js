import React from "react";
import defaultImage from '../images/default-user-icon-6.jpg';
import Collapse from './Collapse.js';
// receives list of actor and crew objects
// builds cards for each actor and crew
// places each group of cards in a collapsible div


class CastAndCrew extends React.Component {
  render() {
    const castAndCrew = this.props.castAndCrew
    const cast = castAndCrew.cast.length > 0 ?
    <Collapse
      name="Cast"
    >
    {castAndCrew.cast.map(actor =>
      <div className="actor-card" key= {`${actor.name}${actor.character}`}>
        <img className="icon" src={`https://image.tmdb.org/t/p/original${actor.profile_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="icon" />
          <div className="card-body">
            <h5 >{actor.name} as {actor.character}</h5>
          </div>
      </div>)}
    </Collapse> : null ;
      const crew = castAndCrew.crew.length > 0 ?
      <Collapse
        name="Crew"
      >
      {castAndCrew.crew.map(member =>
        <div className="actor-card" key= {`${member.name}${member.job}`}>
          <img className="icon" src={`https://image.tmdb.org/t/p/original${member.profile_path}`} onError={(e)=>{e.target.onerror = null; e.target.src=defaultImage}} alt="icon" />
            <div className="card-body">
              <h5 >{member.job}: {member.name}</h5>
            </div>
        </div>)}
        </Collapse> : null;

    return (
    	<div>
        {cast}
        {crew}
      </div>
    );
  }
	}

export default CastAndCrew;
