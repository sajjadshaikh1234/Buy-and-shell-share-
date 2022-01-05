import React from 'react';

import "../src/Spinner.css"

const Spinner = props => {
  const { withoutMargin } = props;
  return <div className={`loader ${withoutMargin ? 'without-margin' : ''}`} />;
};

export default Spinner;
