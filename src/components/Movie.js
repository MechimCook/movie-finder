import React from "react";
import {Link} from "react-router-dom";
import defaultPoster from '../images/default-poster.jpeg';
const Movie = props => (
	<Link to={`/movie/?id=${props.id}`}>
		 <div className="card">
		   <img className="card-img" src={props.image} onError={(e)=>{e.target.onerror = null; e.target.src=defaultPoster}} alt="not_found.jpg"/>
		   <div className="card-body">
		     <h5 className="card-title">{props.title}</h5>
		     <p className="card-text">{props.overview}</p>
				 <div className="Stars" style={{"--rating": props.rating}} />
				 <p className="card-title">{`${props.votes} Votes`}</p>
		   </div>
 		 </div>
		 </Link>
);

export default Movie;
