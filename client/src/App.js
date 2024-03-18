import React from 'react'
import {Route,Routes} from 'react-router-dom'
import HomePage from './pages/HomePage'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import Layout from './layouts/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Policy from './pages/Policy'
import PageNotFound from './pages/PageNotFound'
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/policy' element={<Policy></Policy>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </Layout>
  )
}

export default App