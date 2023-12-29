import React from 'react'
import './App.css'
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Contact from './components/contact';
import Navbar from './components/Navbar';
import EventHandling from './components/EventHandling';
import NotFound from './components/NotFound';
import StateManagement from './components/stateManagement';
import Todoapp from './components/Todoapp';
import ListPost from './components/ListPost';
import { Toaster } from 'react-hot-toast';
import { SnackbarContent, SnackbarProvider } from 'notistack';
import ManageUser from './components/ManageUser';
import UpdateUser from './components/UpdateUser';
import { AppProvider } from './AppContex';


const App = () => {
  return (
    <div>
      <SnackbarProvider anchorOrigin={{ horizontal: 'right', vertical: 'top' }} maxSnack={3}>

        {/* // <Toaster position='top-center'/> */}

        < BrowserRouter>
        <AppProvider>
          <Navbar  cartItem={10}/>
          {/* <Link to ="/">Home Page</Link>
        <Link to ="/login">Login Page</Link>
        <Link to ="/signup">Signup Page</Link>
        <Link to f="/contact">Contact Page</Link>
       */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Login' element={<Login />} />
            <Route path='/Signup' element={<Signup />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='event' element={<EventHandling />} />
            <Route path='/state' element={<StateManagement />} />
            <Route path='/Todo' element={<Todoapp />} />
            <Route path='/Listpost' element={<ListPost />} />
            <Route path='/ManageUser' element={<ManageUser />} />
            <Route path='/UpdateUser/:id' element={<UpdateUser />} />

            <Route path='*' element={<NotFound />} />


          </Routes>
          </AppProvider>
        </BrowserRouter>
      </SnackbarProvider>


    </div>
  )
}

export default App;