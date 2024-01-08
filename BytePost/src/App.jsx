import { Routes,Route } from 'react-router-dom'
import './App.css'
import Header from './components/header/header'
import HomePage from './components/homepage/homepage'
import MainPage from './components/mainpage/mainpage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage/>}>
        <Route index element={<MainPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
