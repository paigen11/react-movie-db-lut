import React from 'react';
// how you grab data using redux instead of passing it through props
import { connect } from 'react-redux';
/* by placing the toggle message action in another file, it can be removed
from the dispatch function here (that's an 'action creator') and it can
 then be reused and dropped anywhere in your project */
import { toggleMessage } from './actions';

const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button type="button" onClick={() => dispatch(toggleMessage())}>
      Toggle Me
    </button>
  </div>
);

// allows us to pick which aspects of the redux store will be passed to that component
const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility,
});

// connects toggle to redux store and export all of it as Toggle
export default connect(mapStateToProps)(Toggle);
