import React from "react";

class Table extends React.Component {
  render() {
    const { list } = this.props;
    return (
      <div className="list-group">
        {list.map(item => (
          <div key={item.objectID} className="list-group-item">
            <h5>{item.title}</h5>
            <div className="text-truncate">
              <small className="text-muted pr-2">{item.points}</small>|
              <small className="text-muted px-2">{item.author}</small>|
              <small className="px-2">
                <a href={item.url} className="text-muted">
                  {item.url}
                </a>
              </small>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Table;
