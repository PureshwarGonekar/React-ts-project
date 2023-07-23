import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import SecondPage from './SecondPage'

import './App.css';
function App() {

  return (
      <Router>
          <div>
              <Routes>
                  <Route path="/" element={ <Form/> } />
                  <Route path="/second-page" element={ <SecondPage /> } />
              </Routes>
          </div>
      </Router>
  )
}

export default App
