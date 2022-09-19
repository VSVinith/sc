import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import Recomendations from './components/Recomendations'; 
import './App.css';
import SuccessPage from './components/SuccessPage';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/recomendations" element={<Recomendations />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  )
}
export default App;
