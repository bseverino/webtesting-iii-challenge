import React from 'react';
import { connect } from 'react-redux';

import { toggleLocked, toggleClosed } from '../store/actions';

const Controls = props => {
  const { locked, closed, toggleLocked, toggleClosed } = props;

  return (
    <div className="controls panel" data-testid='controls'>
      <button
        disabled={!closed}
        onClick={toggleLocked}
        className="toggle-btn"
      >
        {locked ? 'Unlock Gate' : 'Lock Gate'}
      </button>
      <button
        disabled={locked}
        onClick={toggleClosed}
        className="toggle-btn"
      >
        {closed ? 'Open Gate' : 'Close Gate'}
      </button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    locked: state.locked,
    closed: state.closed
  };
};

export default connect(mapStateToProps, { toggleLocked, toggleClosed })(Controls);
