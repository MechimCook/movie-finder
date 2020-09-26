import React from "react";
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
        <button>{this.props.page}</button>
      </form>
    );
  }
	}

export default PageButtons;
