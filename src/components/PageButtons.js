import React from "react";
// takes the target param (this can be used to change url in case of new search type),
// query, page, and arrow direction
// builds page select button
class PageButtons extends React.Component {
  constructor () {
     super()
     this.state = {}
   }
  handleClick = (page) => {
    console.log(this);
  }
  render() {
    return (
      <form action={`/${this.props.target}/`}>
        <input type="hidden" name="query" value={this.props.query}/>
        <input type="hidden" name="page" value={this.props.page}/>
        <button className={`arrows btn  ${this.props.side}`}><b>{this.props.page}</b></button>
      </form>
    );
  }
	}

export default PageButtons;
