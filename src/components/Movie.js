import React from "react";

const Movie = props => (
	<div className="movie__info">
	 {
	 	props.title && <p className="movie__key"> Title:
	 		<span className="movie__value"> { props.title }</span>
	 	</p>
	 }
	</div>
);

export default Movie;
