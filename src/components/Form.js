import React from "react";
// directs to /movies/ with search params for results component to grab
const Form = props => (
	<form action="/movies/">
		<input type="text" name="query" placeholder="movie name" required/>
		<input type="hidden" id="page" name="page" value="1"/>
		<button>Get movie</button>
	</form>
);

export default Form;
