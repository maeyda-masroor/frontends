import './App.css';
import MainNavBar from './component/MainNavBar';
import FAQ from './Pages/FAQ';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
function App() {
  return (
      <BrowserRouter>
          <MainNavBar/>
          <Routes>
          <Route path = "/FAQ" element={<FAQ/>}/>
          </Routes>
        </BrowserRouter>    
  );
}

export default App;
