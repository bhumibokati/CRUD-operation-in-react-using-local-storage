import Header from './components/Header'
import Home from './components/Home'
import Add from './components/Add'
import Edit from './components/Edit'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import './App.css';
function App() {
  return (
    <>
    <Header />
    <Router>
    <Routes>
         <Route path="/" element={<Home />}/>
         <Route path="/add" element={<Add />}/>
         <Route path="/edit" element={<Edit />}/>
        </Routes>
        </Router>
    </>
    
  );
}

export default App;
