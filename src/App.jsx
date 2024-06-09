import './App.css';
import { Routes, Route } from 'react-router-dom'
import Homepage from './Homepage';
import Nav from './common/Nav';
import Section from './components/Section';
import sectionsJSON from './data/NYT-sections.json'
import SectionSummaryContext from './components/SectionSummaryContext'
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const sections = Array.from(sectionsJSON);

  return (
    <>
    {location.pathname !== '/' ? <Nav /> : ''}
    <Routes>
      <Route path='/' element={<Homepage sections={sections}/>} />
      <Route path='/sections/:id' element={<Section sections={sections}/>} />
      <Route path='/sections/summary' element={<SectionSummaryContext sections={sections}/>}/>
    </Routes>
    </>
  );
}

export default App;
