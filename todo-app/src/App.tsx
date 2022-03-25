import React from 'react';
import "./service/firebase"
import AuthProvider from './provider/AuthProvider';

import Header from './components/header'
import Dashboard from './components/dashboard'
import Footer from "./components/Footer"

function App() {
  return (
    <AuthProvider>
      <Header />
      <Dashboard />
      <Footer />
    </AuthProvider>
  );
}

export default App;
