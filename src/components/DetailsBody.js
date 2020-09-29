import React from "react";

// receives details of movie
// checks if each value is not empty
// formates body for all availible information
//

class DetailsBody extends React.Component {
  render() {
    const image = !this.props.image ?  null :
    `https://image.tmdb.org/t/p/w500${this.props.image}`

    const genres = this.props.genres.length <= 0 ?  null :
      <div className="mt-10"><div>Genres: </div><div>{this.props.genres.map(genre => genre.name).join(', ')}</div></div>;

    const producedBy = this.props.producedBy.length  <= 0 ? null :
      <div className="mt-10"><div>Produced By: </div><div>{this.props.producedBy.map(company => company.name).join(', ')}</div></div>;

    const producedIn = this.props.producedIn.length  <= 0 ? null :
      <div className="mt-10"><div> Produced In: </div><div>{this.props.producedIn.map(country => country.name).join(', ')}</div></div>;

    const languages = this.props.languages.length  <= 0 ? null :
     <div className="mt-10"><div>Languages Spoken: </div><div>{this.props.languages.map(language => language.name).join(', ')}</div></div>;

    const releaseDate = !this.props.releaseDate ? null :
      <h4>Release Date: {new Date(this.props.releaseDate).toDateString()}</h4>;

    const runTime = !this.props.runTime ? null :
      <h4>Run Time: {`${Math.floor(this.props.runTime / 60)}:${this.props.runTime % 60}`}</h4>;

    const homePage = this.props.homePage === "" ? null :
        <button className="buttonStyle" onClick={event => window.location.href=this.props.homePage}>Watch This Movie</button>


    return (
    	<div>
        <img className="detail-img" src={image} onError={(e)=>{e.target.onerror = null;}} alt=""/>
        <p className="detail-desc">{this.props.description}</p>
        {genres}
        {producedBy}
        {producedIn}
        {languages}
        {releaseDate}
        {runTime}
        {homePage}
      </div>
    );
  }
	}

export default DetailsBody;
