import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './components/Home';
import Header from './UI/Header';
import Movies from './components/Movies';
import TV from './components/TV';
import ItemHeader from './components/ItemHeader';

function App() {
  return (
    <div className="app-wrapper">
      <Router>
        <div className=''>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/movies" element={<Movies/>}></Route>
            <Route exact path="/tv" element={<TV/>}></Route>
            <Route exact path="/:type/:id" element={<ItemHeader/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
