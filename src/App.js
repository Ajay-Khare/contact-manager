import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Contact from './components/contacts/Contact';

import LoginPage from './components/Login/login';
import RegisterPage from './components/Register/register';

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/signup' element={<RegisterPage/>}/>
          <Route path='/contacts' element={<Contact/>}/>

      </Routes>
   </BrowserRouter>
  );
}

export default App;
