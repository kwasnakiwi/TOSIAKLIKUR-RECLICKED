import { BrowserRouter as Router, Routes, Route } from 'react-router'
import SignUp from './auth/SignUp'
import Home from './mainPage/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/sign-in' />
        <Route path='/sign-up' element={<SignUp />} />
      </Routes>
    </Router>
  )
}

export default App
