import React from 'react';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

export default props => {
  const { text, onClick, disabled } = props;
  return <PrimaryButton onClick={onClick} text={text} disabled={disabled} />;
};
