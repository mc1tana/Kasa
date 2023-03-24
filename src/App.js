import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './Views/Accueil/AccueilComponent';
import NotFound from './Views/View404/NotFoundComponent';
import Detail from './Views/Detail/DetailComponent';
import { faFontAwesome } from '@fortawesome/free-solid-svg-icons';
import Propos from './Views/Propos/ProposComponent';

function App() {
  return (
    <div className="App">
        <BrowserRouter basename='/Kasa'>
            <Routes>
                 <Route path="/" element={<Accueil/>} />
                <Route path="/Propos" element={<Propos/>} /> 
                <Route path="/DetailPhoto" element={<Detail/>}/>
                <Route path="*" element={<NotFound/>} /> 
            </Routes>
        </BrowserRouter>
        
    </div>
  );
}

export default App;
