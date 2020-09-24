
import React from "react";

const Form = props => (
	<form onSubmit={props.getMovie}>
		<input type="text" name="title" placeholder="movie name"/>
		<button>Get movie</button>
	</form>
);

export default Form;
