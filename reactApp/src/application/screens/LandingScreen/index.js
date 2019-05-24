import React, { Component } from 'react';
import ReactCard from '../../components/Card/ReactCard';

const loginRoles = [
  { unit: 'Manufacturing Unit', route: '#/manufacturingUnit' },
  { unit: 'Shipping Unit', route: '#/shippingUnit' },
  { unit: 'Warehouse Unit', route: '#/warehouseUnit' },
  { unit: 'Retail Unit', route: '#/retailUnit' }
];
class LandingScreen extends Component {
  render() {
    return (
      <div>
        {loginRoles.map((role, i) => (
          <div key={i}>
            <ReactCard
              subTitle={role.unit}
              route={role.route}
              linkOneTitle="Login"
              key={i}
            >
              <span>
                <span>Login as </span>
                <span>{role.unit}</span>
              </span>
            </ReactCard>
          </div>
        ))}
      </div>
    );
  }
}

export default LandingScreen;
