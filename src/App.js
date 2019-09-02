import React from 'react';
import Routes from '../src/components/Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="flexible-content">
          <main id="content">
            <Routes />
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
