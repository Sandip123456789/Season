import React from 'react';

function Spinner(props) {
  return (
    <div className="ui active dimmer">
      <div className="ui large text loader">{props.message}</div>
    </div>
  );
}

//** if we don't specify the message its shows default message */
Spinner.defaultProps = {
  message: 'Loading...',
};

export default Spinner;
