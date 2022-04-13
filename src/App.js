import './App.scss';
import Header from './components/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TinderCards from './pages/TinderCards';
import Chats from './pages/Chats';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <TinderCards />
            </>
          }/>
          <Route path="/chats" element={
            <>
              <Header backButton="/"/>
              <Chats />
            </>
          }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
