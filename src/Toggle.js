import React from 'react';
// how you grab data using redux instead of passing it through props
import { connect } from 'react-redux';

const Toggle = ({ messageVisibility, dispatch }) => (
  <div>
    {messageVisibility && (
      <p>You will be seeing this if redux action is toggled</p>
    )}
    <button
      onClick={() =>
        dispatch({
          type: 'TOGGLE_MESSAGE',
        })
      }
    >
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
