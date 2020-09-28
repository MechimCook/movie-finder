import React from "react";

class DetailsBody extends React.Component {
  render() {

    const genres = this.props.genres.length > 0 ?
    <div className="mt-10"><div>Genres: </div><div>{this.props.genres.map(genre => genre.name).join(', ')}</div></div> : null;

    const producedBy = this.props.producedBy.length > 0 ?
    <div className="mt-10"><div>Produced By: </div><div>{this.props.producedBy.map(company => company.name).join(', ')}</div></div> : null;

    const producedIn = this.props.producedIn.length > 0 ?
    <div className="mt-10"><div> Produced In: </div><div>{this.props.producedIn.map(country => country.name).join(', ')}</div></div>: null;

    const languages = this.props.languages.length > 0 ?
     <div className="mt-10"><div>Languages Spoken: </div><div>{this.props.languages.map(language => language.name).join(', ')}</div></div> : null;

    const releaseDate = this.props.releaseDate ?
    <h4>Release Date: {new Date(this.props.releaseDate).toDateString()}</h4> : null;

    const runTime = this.props.runTime ?
    <h4>Run Time: {`${Math.floor(this.props.runTime / 60)}:${this.props.runTime % 60}`}</h4> : null;

    const homePage = this.props.homePage === "" ? null :
        <button className="buttonStyle" onClick={event => window.location.href=this.props.homePage}>Watch This Movie</button>


    return (
    	<div>
      <img className="detail-img" src={this.props.backdropPath} onError={(e)=>{e.target.onerror = null;}} alt=""/>
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
