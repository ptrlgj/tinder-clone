import './App.scss';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<h1>home</h1>}/>
          <Route path="/chat" element={<h1>chat</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
