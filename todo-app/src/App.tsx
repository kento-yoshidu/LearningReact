import React from 'react';
import "./service/firebase"
import AuthProvider from './provider/AuthProvider';

import Header from './components/header';

function App() {
  return (
    <AuthProvider>
      <Header />
    </AuthProvider>
  );
}

export default App;
