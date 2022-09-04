import { Routes, Route } from 'react-router-dom';
import ApiForm from './components/ApiForm';
import Display from './components/Display';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ApiForm />} path="/" />
        <Route element={<Display />} path="/display/:type/:id" />
      </Routes>
    </div>
  );
}

export default App;
