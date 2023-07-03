import React from 'react';

function Component1(props) {
  const { number } = props;
  return (
    <div style={{
      color: "red",
      fontSize: 40,
    }}>
      Component Rebase-child Task 02 {number}
    </div>
  );
}

export default Component1;