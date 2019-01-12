import React, { Component } from "react";

class Pager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1,
      nbPages: this.props.nbPages,
      dpgCount: 6
    };

    this.onPageClick = this.onPageClick.bind(this);
    this.onPageLeft = this.onPageLeft.bind(this);
    this.onPageRight = this.onPageRight.bind(this);
  }

  onPageClick(page) {
    this.setState({ currentPage: page });
    this.props.onClick(page);
  }
  onPageLeft() {
    const { currentPage } = this.state;
    currentPage > 1 && this.onPageClick(currentPage - 1);
  }

  onPageRight() {
    let { currentPage, nbPages } = this.state;
    currentPage < nbPages && this.onPageClick(currentPage + 1);
  }

  createControls() {
    const controls = [];
    let { currentPage, nbPages, dpgCount } = this.state;

    if (nbPages > 5) {
      controls.push(
        <button key="left" className="btn" onClick={this.onPageLeft}>
          &laquo;
        </button>
      );

      let end = currentPage + dpgCount;

      if (currentPage > nbPages - dpgCount) {
        currentPage = nbPages - dpgCount;
      }
      if (end > nbPages) {
        end = nbPages;
      }

      if (currentPage >= 2) {
        let index = currentPage - 1;
        controls.push(
          <button
            key={index}
            className={index === currentPage ? "btn active-page" : "btn"}
            onClick={() => this.onPageClick(index)}
          >
            {index}
          </button>
        );
      }

      for (let i = currentPage; i <= end; i++) {
        controls.push(
          <button
            key={i}
            className={i === currentPage ? "btn active-page" : "btn"}
            onClick={() => this.onPageClick(i)}
          >
            {i}
          </button>
        );
      }

      controls.push(
        <button key="right" className="btn" onClick={this.onPageRight}>
          &raquo;
        </button>
      );
    } else {
      for (let i = 1; i <= nbPages; i++) {
        controls.push(
          <button
            key={i}
            className={i === currentPage ? "btn active-page" : "btn"}
            onClick={() => this.onPageClick(i)}
          >
            {i}
          </button>
        );
      }
    }

    return controls;
  }

  render() {
    return <div className="btn-group">{this.createControls()}</div>;
  }
}

export default Pager;
