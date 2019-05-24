import React, { Component } from 'react';
import FabricTextField from '../../components/Inputs/FabricTextField';

class CreateQR extends Component {
  render() {
    return (
      <div>
        <FabricTextField label="QR Name" errorMessage="" />
      </div>
    );
  }
}

export default CreateQR;
