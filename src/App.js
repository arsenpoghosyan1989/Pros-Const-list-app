/**
 * @file
 * Contains App component.
 */

import React from 'react';
import Home from './views/HomePage';
import { Container } from './App.style';

const App = function () {
  return (
    <Container>
      <Home />
    </Container>
  );
};

export default App;
