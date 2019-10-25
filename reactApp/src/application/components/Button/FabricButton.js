import React from 'react';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';

export default props => {
  const { text, onClick, disabled } = props;
  return <DefaultButton onClick={onClick} text={text} disabled={disabled} />;
};
