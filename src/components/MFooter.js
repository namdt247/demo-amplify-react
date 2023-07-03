import React from 'react';

function MFooter(props) {
  const { year } = props;
  return (
    <div>
      Information footer, {year}
    </div>
  );
}

export default MFooter;