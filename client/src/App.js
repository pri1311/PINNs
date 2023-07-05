import './App.module.css';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/Movie';
import Layout from './components/Layout';

function App() {
  return (
   <div>
    <Header/>
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path='/reviews/:imdbId' element={<Movie/>}/>
        </Route>
      </Routes>
   </div>
  );
}

export default App;
