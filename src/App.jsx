import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoForm from './TodoForm';
import "./App.css"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/CelebalTech-ToDo" element={<TodoForm />} />
      </Routes>
    </Router>
  );
}

export default App;









