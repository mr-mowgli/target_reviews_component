import React from 'react';
import ReactDOM from 'react-dom';

import List from './Components/List.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allData: ['some data here']
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/reviews')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          allData: data
        })

      })
  }

  render() {
    return (
      <List allData={this.state.allData}/>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));