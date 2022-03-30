import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import List from './Components/List';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import Content from './Components/Content';
import Card from './Components/Card';

function App({props}) {
  const isOk = true;
  return (
    <div>
      <Router>
        <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<List />} />
        <Route  path="/add" element={<Content />} />
        
      </Routes>
      </Router>
      
      {/**isOk ? <List /> : null **/}
    </div>
  );
}

export default App;
