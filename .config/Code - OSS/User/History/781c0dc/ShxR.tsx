import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<span>Home Page</span>}
      </Routes>
    </Router>>
  )
}

export default App
