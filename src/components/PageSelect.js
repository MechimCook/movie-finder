import React from "react";
import PageButtons from "./PageButtons.js";
class PageSelect extends React.Component {
  constructor () {
     super()
     this.state = {}
   }

  render() {
    var backButtons = []
    var nextButtons = []
    var page = this.props.page
    var query = this.props.query
    var target = this.props.target
    var last = this.props.lastPage
    for (var i = 1; i <= 3; i++) {
      if (page - i > 0) {
      backButtons.push(
        <PageButtons
        page={page - i}
        query={query}
        target={target}
        />
      )
    }
      if (page + i < last) {
        nextButtons.push(
          <PageButtons
          page={page + i}
          query={query}
          target={target}
          />
        )
      }

    }
    let firstButton = ""
    if (page !== 1) {
       firstButton =
        <PageButtons
        page={1}
        query={query}
        target={target}
        />

    }
    let lastButton = ""
    if (page !== last) {
       lastButton =
        <PageButtons
        page={last}
        query={query}
        target={target}
        />

    }
    return (
      <div className="nav">
      {firstButton}
      {backButtons.reverse()}
      <button >{page}</button>
      {nextButtons}
      {lastButton}
      </div>

    );
  }
	}

export default PageSelect;
