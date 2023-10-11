import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Signup from './components/Signup';
import Login from './components/Login';
import Add from './components/Add';
import { ProtectedRoute } from './Protectedroute/ProtectedRoute';
import Viewcard from './components/Viewcard';
import Tenblogs from './components/Tenblogs';
import Allblogs from './components/Allblogs';
import ViewAllCards from './components/ViewAllCards';

function App() {
  return (
    
    <div className="App">
    <Header/>
    <Routes>
    <Route path='/' element={<Tenblogs/>}/>
    <Route path='/create' element={<ProtectedRoute element={Add} />}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/view/:id' element={<Viewcard/>}/>
    <Route path='/getall' element={<Allblogs/>}/>
    <Route path='/getall/:id' element={<ViewAllCards/>}/>
    </Routes>
    </div>
  );
}

export default App;
