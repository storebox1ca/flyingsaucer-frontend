import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Guest routes */}
          <Route path="/" exact={true} element={<Home />} />
          <Route path='*' element={<NotFound />} />
          {/* Guest routes, Not logged in */}
          
          {/* Private routes */}
        </Routes>
      </Router>
 
    </div>
  );
}

export default App;
