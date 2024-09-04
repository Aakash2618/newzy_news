import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap'
import Nav from './Components/Nav';
import Container from './Components/Container';
import { BrowserRouter,Routes, Route} from 'react-router-dom'
// import {basename} from 'basename';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Container key="home" category="general"/>} />
          <Route path='/general' element={<Container key="home" category="general"/>} />
          <Route path='/health' element={<Container key="health" category="health"/>} />
          <Route path='/business' element={<Container key="business" category="business"/>} />
          <Route path='/technology' element={<Container key="technology" category="technology"/>} />
          <Route path='/science' element={<Container key="science" category="science"/>} />
          <Route path='/sports' element={<Container key="sports" category="sports"/>} />
          <Route path='/entertainment' element={<Container key="entertainment" category="entertainment"/>} />
        </Routes>
    </BrowserRouter>
    {/* <Nav/>
    <Container/> */}
    </>
  );
}

export default App;
