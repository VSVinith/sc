import { Routes, Route } from 'react-router-dom';
import Cards from './components/Cards';
import './App.css';
import SuccessPage from './components/SuccessPage';
import RecomendationsAndAnalysis from './components/RecomendationsAndAnalysis';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/recomendations" element={<RecomendationsAndAnalysis />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  )
}
export default App;
