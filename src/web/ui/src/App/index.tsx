import React, { Fragment } from 'react';
import AppMenu from './AppMenu';
import SideMenu from './SideMenu';
import { Grid } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { useStep, useMenuTab } from '../hooks';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import About from './About';
import GettingStarted from './GettingStarted';

function App() {
  const { step } = useStep();
  const { menuTab } = useMenuTab();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <AppMenu />
      {menuTab === 'home' && (
        <Fragment>
          <SideMenu />
          <div className="main-content-container">
            <Grid centered>
              <Step1 />
              {step >= 1 && <Step2 />}
              {step >= 2 && <Step3 />}
              {step >= 3 && <Step4 />}
              {step >= 4 && <Step5 />}
            </Grid>
          </div>
        </Fragment>
      )}
      {menuTab === 'about' && <About />}
      {menuTab === 'getting_started' && <GettingStarted />}
    </div>
  );
}

export default App;
