import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Results from "./components/Results";

const API_KEY = "644624460dcd621295212339eb7f478d";

class App extends React.Component {
  state = {
    title: undefined,
    error: undefined
  }
  getMovie = async (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value;
    const api_call = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${title}&appid=${API_KEY}&page=1`);
    const data = await api_call.json();
    if (title) {
      this.setState({
        results: data.results,
        error: ""
      });
    } else {
      this.setState({
        title: undefined,
        error: "Please enter the values."
      });
    }
  }
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="title-container">
                  <Titles />
                </div>
                <div className="form-container text-center">
                  <Form getMovie={this.getMovie} />
                  <Results
                    results={this.state.results}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
