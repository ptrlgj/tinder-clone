import './App.scss';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TinderCards from './pages/TinderCards';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<TinderCards />}/>
          <Route path="/chat" element={<h1>chat</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
