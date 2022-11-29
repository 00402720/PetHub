
import MainPage from './Pages/MainPage';
import SignUp from './components/SingUpPage/SingupPage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route exact path = "/sign-up" element = {<SignUp />} />
      
      <Route exact path = "/Profile" element = {<ProfilePage />} />
      <Route exact path = "/login" element = {<LoginPage />} />
    </Routes>
  )
}

export default App
