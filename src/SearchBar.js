import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    return (
      <div className="ant-row search-bar">
        <div className="ant-col-6 ant-col-offset-9">
          <input
            className="ant-input ant-input-lg"
            onChange={event => this.onInputChange(event.target.value)}
            placeholder="Enter the video name"
            value={this.state.term} />
        </div>
      </div>
    )
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;
