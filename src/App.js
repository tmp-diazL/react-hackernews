import React from "react";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchTerm: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    const { searchTerm } = this.state;
    this.fetchStories(searchTerm);
    e.preventDefault();
  }

  setStories(results) {
    this.setState({ results });
  }

  fetchStories(searchTerm) {
    const url = `http://hn.algolia.com/api/v1/search?query=${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(results => this.setStories(results));
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container my-4">
        <SearchBar onChange={this.onChange} onSubmit={this.onSubmit} />
        {results ? <Table list={results.hits} /> : null}
      </div>
    );
  }
}

export default App;
