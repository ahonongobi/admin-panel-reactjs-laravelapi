import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Navbar from './Components/Navbar';
import List from './Components/List';
import Sidebar from './Components/Sidebar';
import Table from './Components/Table';
import Content from './Components/Content';
import Card from './Components/Card';
import Edit from './Components/Edit';
import Login from './Components/Login';
import WithoutNav from './Components/WithoutNav';
import WithNav from './Components/WithNav';
import ProtectedRoute from './Components/ProtectedRoute';
import View from './Components/View';

function App({props}) {
  
  return (
    <div>
       {/**<Router>
        <Navbar /><Sidebar /> 
        
        
      <Routes>
      
        <Route exact path="/login" element={<Login />} /> 
        <Route exact path="/" element={<List />} />
        
        <Route  path="/add" element={<Content />} />
        <Route  path="/edit/:id" element={<Edit />} />
      
      </Routes>
  </Router> **/}
  <Router>
      <Routes>
      <Route element={<WithoutNav />}>
          <Route path="/login" element={<Login />} />
        </Route> 
        
        <Route element={<WithNav />}>
          <Route element={<ProtectedRoute />}>
          <Route path="/" element={<List />} />
          <Route  path="/add" element={<Content />} />
          <Route  path="/edit/:id" element={<Edit />} />
          <Route path="/view/:id" element={<View />} />
          </Route>
        </Route> 
      </Routes>
  </Router>
      
      {/**isOk ? <List /> : null **/}
    </div>
    
  );
  
}

export default App;
