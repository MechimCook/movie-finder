import React from "react";
import {Link} from "react-router-dom";
import defaultPoster from '../images/default-poster.jpeg';
// takes movie id, image, title, overview, rating, and votes
// builds movie card that redirects to the details of movie
// if no image is found uses default poster
const style = {
	movieLink: {
		color: 'black'
	},
};
const Movie = props => (
	<Link style={style.movieLink} to={`/movie/?id=${props.id}`}>
		 <div className="card">
		   <img className="card-img" src={
				 props.image ? `https://image.tmdb.org/t/p/w500${props.image}` : defaultPoster}
				 onError={(e)=>{e.target.onerror = null; e.target.src=defaultPoster}}
				 alt="not_found.jpg"
				/>
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
