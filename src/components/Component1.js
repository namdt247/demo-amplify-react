import React from 'react';

function Component1(props) {
  const { number } = props;
  return (
    <div style={{
      color: "red",
      fontSize: 40,
    }}>
      Component Rebase Main 01 {number}
      Component Rebase-child Main 01 {number}
    </div>
  );
}

export default Component1;