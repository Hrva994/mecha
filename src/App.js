import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderSection from './sections/Header';
import routes from './router/routes';
import UserAccessLayout from './sections/UserAccess';
import Home from './sections/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <div className='min-h-screen bg-cover bg-no-repeat bg-[url(https://images.unsplash.com/photo-1530293959042-0aac487c21e3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ymx1ZSUyMGFuZCUyMHdoaXRlfGVufDB8fDB8fHww)]'>
      <Routes>
        <Route path='/' element={<Home />}>
            <Route index path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
        </Route>
      {
        routes.map((route) => {
          return (
            <Route path={route.path} element={route.element} key={route.path}/>
          )
        })
      }
      </Routes>
      </div>
     
      
    </div>
  );
}

export default App;
