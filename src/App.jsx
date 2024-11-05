import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage';
import Nav from './common/Nav';
import Section from './components/Section';
import categoriesJSON from './data/categories.json'
import SectionSummaryContext from './components/SectionSummaryContext'
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const categories = Array.from(categoriesJSON);

  return (
    <>
    {location.pathname !== '/' ? <Nav /> : ''}
    <Routes>
      <Route path='/' element={<Homepage categories={categories}/>} />
      <Route path='/sections/:id' element={<Section categories={categories}/>} />
      <Route path='/sections/summary' element={<SectionSummaryContext categories={categories}/>}/>
    </Routes>
    </>
  );
}

export default App;
