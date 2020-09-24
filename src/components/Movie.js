import React from "react";

const Movie = props => (
		 <div className="card">
		   <img className="card-img" src={props.image} alt={props.title} />
		   <div className="card-body">
		     <h5 className="card-title">{props.title}</h5>
		     <p className="card-text">{props.overview}</p>
		   </div>
 		 </div>
);

export default Movie;
