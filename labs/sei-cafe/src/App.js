import './App.css';
// Import the following components
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
import NavBar from './components/NavBar/NavBar';
import { Routes, Route } from 'react-router-dom';
import {useState} from 'react'

function App() {

  const [user, setUser] = useState({});

  return (
    <main className="App">
      { user ?
        <>
          <NavBar />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
        :
        <AuthPage />
      } 
      
      <h1>App</h1>
      
    </main>
  );
}

export default App;
