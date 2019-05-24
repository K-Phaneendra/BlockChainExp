import React, { Component } from 'react';
import { Customizer } from 'office-ui-fabric-react';
import { FluentCustomizations } from '@uifabric/fluent-theme';
import FabricButton from '../../components/Button/FabricButton';
import FabricRighPanel from '../../components/Panel/FabricRighPanel';
import CreateQR from './CreateQR';

class ManufacturingUnit extends Component {
  state = {
    openQRPanel: false
  };

  toggleCreateQRPanel = () => {
    const { openQRPanel } = this.state;
    this.setState({ openQRPanel: !openQRPanel });
  };

  render() {
    const { openQRPanel } = this.state;
    return (
      <Customizer {...FluentCustomizations}>
        <FabricButton text="create QR" onClick={this.toggleCreateQRPanel} />
        <FabricRighPanel
          show={openQRPanel}
          onDismiss={this.toggleCreateQRPanel}
          heading="Create QR Wizard"
        >
          <CreateQR />
        </FabricRighPanel>
      </Customizer>
    );
  }
}

export default ManufacturingUnit;
