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
      if (page - i > 1) {
      backButtons.push(
        <PageButtons
        key={`left${i}`}
        page={page - i}
        query={query}
        target={target}
        side=" btn-arrow-left"
        />
      )
    }
      if (page + i < last) {
        nextButtons.push(
          <PageButtons
          key={`right${i}`}
          page={page + i}
          query={query}
          target={target}
          side="btn-arrow-right"
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
      <button className="front">{page}</button>
      {nextButtons}
      {lastButton}
      </div>

    );
  }
	}

export default PageSelect;
