import './App.css';
import React from 'react';
import Header from './website-components/header';
import SiteInfo from './website-components/main'
import Footer from './website-components/footer';
import './website/main.css';

function App() {
  return (
   <div className="body">
     <Header />
     <SiteInfo />
     <Footer />
   </div>
  );
}

export default App;
