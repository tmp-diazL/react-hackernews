import React from "react";
import Pager from "./Pager";

import "./Table.css";

class Table extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <div className="list-group">
        {list.hits.map(item => (
          <div key={item.objectID} className="list-group-item">
            <h4>{item.title}</h4>
            <div className="post-detail">
              <small>{item.points}</small>
              <span>|</span>
              <small>{item.author}</small>
              <span>|</span>
              <small>
                <a href={item.url}>
                  {item.url || item._highlightResult.title.value}
                </a>
              </small>
            </div>
          </div>
        ))}
        <div
          className="list-group-item"
          style={{
            display: "flex",
            justifyContent: "center",
            background: "#fff"
          }}
        >
          <Pager nbPages={list.nbPages} onClick={this.props.onPageClick} />
        </div>
      </div>
    );
  }
}

export default Table;
