import React from 'react';
import { Panel, PanelType } from 'office-ui-fabric-react/lib/Panel';

export default props => {
  const {
    show, onDismiss, heading, children
  } = props;
  return (
    <div>
      <Panel
        focusTrapZoneProps={{}}
        isOpen={show}
        onDismiss={onDismiss}
        type={PanelType.medium}
        headerText={heading}
      >
        {children}
      </Panel>
    </div>
  );
};
