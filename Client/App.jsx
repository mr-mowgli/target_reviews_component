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
      filterOptions: ['5 stars', '4 stars', '3 stars', '2 stars', '1 star'],
      sortCurrent: 'most recent',
      filterCurrent: '5 stars'
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
  // ==== NOT VERY DRY ==== //
  sortReviews(data, option) {
    if (option === 'most recent') {
    return data.sort(function compare(a, b) {
        var aTime = a.createdAt;
        var bTime = b.createdAt;
        return bTime.localeCompare(aTime);
      });
    } else if (option === 'highest rated') {
      return data.sort(function compare(a, b) {
        var aTime = a.stars.toString();
        var bTime = b.stars.toString();
        return bTime.localeCompare(aTime);
      });
    } else if (option === 'lowest rated') {
      return data.sort(function compare(a, b) {
        var aTime = a.stars.toString();
        var bTime = b.stars.toString();
        return aTime.localeCompare(bTime);
      });
    } else if (option === 'most helpful') {
      return data.sort(function compare(a, b) {
        var aTime = a.helpfulVotes.toString();
        var bTime = b.helpfulVotes.toString();
        return bTime.localeCompare(aTime);
      });
    }
  }

  sortByChange(event) {
    this.setState({
      sortCurrent: event.target.value
    }, function() {
      if (this.state.sortCurrent === 'most recent') {
        console.log('most recent')
        this.setState({
          allData: this.sortReviews(this.state.allData, 'most recent')
        })
      } else if (this.state.sortCurrent === 'highest rated') {
        console.log('highest rated')
        this.setState({
          allData: this.sortReviews(this.state.allData, 'highest rated')
        })
      } else if (this.state.sortCurrent === 'lowest rated') {
        console.log('lowest rated')
        this.setState({
          allData: this.sortReviews(this.state.allData, 'lowest rated')
        })
      } else if (this.state.sortCurrent === 'most helpful') {
        console.log('most helpful')
        this.setState({
          allData: this.sortReviews(this.state.allData, 'most helpful')
        })
      }
    })

  }

  filterByChange(event) {
    this.setState({
      filterCurrent: event.target.value
    })
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <Overview />
        <Sort
        sortOptions={this.state.sortOptions}
        filterOptions={this.state.filterOptions}
        sortOnChange={this.sortByChange.bind(this)}
        filterOnChange={this.filterByChange.bind(this)}
        />
        <List
          allData={this.state.allData}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));