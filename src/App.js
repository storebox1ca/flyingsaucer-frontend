import logo from './logo.svg';
import './styles/App.css';
import './styles/Icons.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './components/pages/Home';
import About from './components/pages/About';
import ChatBot from './components/pages/ChatBot';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
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
 
    </div>
  );
}

export default App;
