import React from 'react';
import ReactDOM from 'react-dom';

import List from './Components/List.jsx';
import Overview from './Components/Overview.jsx';
import Sort from './Components/Sort.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      allData: ['some data here'],
      sortOptions: ['most recent', 'highest rated', 'lowest rated', 'most helpful'],
      filterOptions: ['5 stars', '4 stars', '3 stars', '2 stars', '1 star']
    };
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/reviews')
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          allData: data,
        })

      })
  }

  render() {
    return (
      <div>
        <Overview />
        <Sort sortOptions={this.state.sortOptions} filterOptions={this.state.filterOptions}/>
        <List
          allData={this.state.allData}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));