import React from 'react';
import { connect } from 'react-redux';

const Display = ({ closed, locked }) => {
  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className="display panel"  data-testid='display'>
      <div className={lockedClass} data-test-id='isGateLocked'>{locked ? 'Locked' : 'Unlocked'}</div>
      <div className={closedClass} data-test-id='isGateClosed'>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    locked: state.locked,
    closed: state.closed
  };
};

export default connect(mapStateToProps, {})(Display);
