import React from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      results: null,
      searchTerm: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.fetchPage = this.fetchPage.bind(this);
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
    console.log(results);
    this.setState({ results });
  }

  fetchPage(page) {
    const { searchTerm } = this.state;

    let url;
    if (!searchTerm) {
      url = `http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`;
    } else {
      url = `http://hn.algolia.com/api/v1/search?query=${searchTerm}&page=${page}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(results => this.setStories(results));
  }
  fetchStories(searchTerm) {
    const url = `http://hn.algolia.com/api/v1/search?query=${searchTerm}`;

    fetch(url)
      .then(response => response.json())
      .then(results => this.setStories(results));
  }

  componentDidMount() {
    const url = `http://hn.algolia.com/api/v1/search_by_date?tags=story`;

    fetch(url)
      .then(response => response.json())
      .then(results => this.setStories(results));
  }

  render() {
    const { results } = this.state;
    return (
      <div className="container my-4">
        <Header onChange={this.onChange} onSubmit={this.onSubmit} />
        {results ? <Table list={results} onPageClick={this.fetchPage} /> : null}
      </div>
    );
  }
}

export default App;
