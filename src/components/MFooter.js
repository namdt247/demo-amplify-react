import React from 'react';

function MFooter(props) {
  const { year } = props;
  return (
    <div>
      Information footer, Rebase 02-child {year}
    </div>
  );
}

export default MFooter;