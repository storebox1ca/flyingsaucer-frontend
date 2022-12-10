import logo from './logo.svg';
import './styles/App.css';
import './styles/Icons.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { ThemeContext } from './contexts/ThemeContext';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ChatBot from './components/pages/ChatBot';
import NotFound from './components/pages/NotFound';

function App() {

  const [isSidebarOpen, setSidebarOpen] = useState(false);
    
  const ToggleSidebar = () => {
    setSidebarOpen(isSidebarOpen === false ? true : false);
  };
  
  useEffect(() => {

    this.state = {
      isSidebar: isSidebarOpen,
      toggleSidebar: ToggleSidebar,
    };
  }, []);

  return (
    <div className="App">
      <ThemeContext.Provider value={this.state.isSidebar}>
      <Router>
        <Routes>
          {/* Guest routes */}
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path='*' element={<NotFound />} />
          {/* Guest routes, Not logged in */}
          
          {/* Private routes */}
        </Routes>
      </Router>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
