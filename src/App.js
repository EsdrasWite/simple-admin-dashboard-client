import "./components/styles/globalStyle.scss"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
