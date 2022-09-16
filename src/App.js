import { Routes, Route } from 'react-router-dom';
import Card from './components/Card';
import Recomendations from './components/Recomendations'; 
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path="/recomendations" element={<Recomendations />} />
      </Routes>
    </div>
  )
}
export default App;
