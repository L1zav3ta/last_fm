import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { Search } from './components/SearchPage/Search';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/search" element={<Search />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
