import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

export default props => {
  const {
    label, errorMessage, isReadOnly, value, onChange
  } = props;
  return (
    <TextField
      label={label}
      errorMessage={errorMessage}
      readOnly={isReadOnly}
      value={value}
      onChange={onChange}
    />
  );
};
