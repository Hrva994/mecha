import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderSection from './sections/Header';
import routes from './router/routes';

function App() {
  return (
    <div className="App">
      <HeaderSection />
      <Routes>
      {
        routes.map((route) => {
          return (
            <Route path={route.path} element={route.element}/>
          )
        })
      }
      </Routes>
    </div>
  );
}

export default App;
