import React from "react";
import styled from "styled-components";

const List = styled.div`
  border: 1px solid green;
`;

class ListComponent extends React.Component {
  render() {
    const { list } = this.props;

    return (
      <List>
        <div className="list">
          {list &&
            list.map((res) => (
              <ul key={res.id}>
                <li style={{ listStyle: "none" }}>{res.title}</li>
              </ul>
            ))}
        </div>
      </List>
    );
  }
}

export default ListComponent;
