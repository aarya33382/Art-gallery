  import './App.css';
   import {Routes,Route} from 'react-router-dom';
   import Main from './Main';
   import Location from './Location';
function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/Location' element={<Location />} />
    </Routes>

    </>

  );
}

export default App;
