import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Results from "./components/Results";
import Details from "./components/Details";
import { BrowserRouter as Router, Route} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="main">
            <div className="container">
                <div className="title-container">
                  <Titles />
                </div>
                <div className="form-container text-center">
                  <Form/>
                  <Route path='/movies/' component={Results} />
                  <Route path='/movie/' component={Details} />
                </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
};

export default App;
