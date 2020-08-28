import React from 'react';
import Badge from "react-bootstrap/Badge";
let marked = require("marked");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    }
  }

  updateMarkdown (markdown) {
    this.setState({ markdown });
  }

  render () {
    const viewStyles = {
      input: {
        width: "90%",
        height: "80vh",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "10px"
      },
      preview: {
        width: "90%",
        height: "80vh",
        backgroundColor: "#dcdcdc",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
        overflowY: "scroll",
        textAlign: "left"
      }
    }
    return (
      <div className="App">
        <div className="row mt-4">
          <div className="col text-center">
            <h1>
              <Badge className="text-align-center" variant="light">
                Markdown Previewer
              </Badge>
            </h1>
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="col text-center">
                  <h4>
                    <Badge 
                      className="text-align-center"
                      variant="secondary">
                      Markdown Input
                    </Badge>
                  </h4>
                  <div className="mark-input">
                    <textarea 
                        className="input" 
                        style={viewStyles.input}
                        value={this.state.markdown}
                        onChange={e => this.updateMarkdown(e.target.value)}>
                    </textarea>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="col text-center">
                  <h4>
                    <Badge 
                      className="text-align-center"
                      variant="secondary">
                      Preview
                    </Badge>
                  </h4>
                  <div 
                    style={viewStyles.preview}
                    dangerouslySetInnerHTML={{ __html: marked(this.state.markdown)}}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default App;
