import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom'
import AuthProvider, {useAuth} from '../auth/security/AuthContext';
import HomePage from '../components/HomePage';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Main from '../components/Main';
import Bookings from '../components/Bookings';
import Calendar from '../components/Calendar';
import Properties from '../components/Properties';
import Performance from '../components/Performance';
import ForgotPassword from '../components/ForgotPassword';

export default function AppRoutes() {
    
  function AuthenticatedRoute({children}) {
    const authContext = useAuth()
    
    if(authContext.isAuthenticated)
        return children
}

    return (
    <div >
<AuthProvider>
            <BrowserRouter>
                    <Routes>
                        <Route path='/' element={ <Main /> } />
                        <Route path='/home' element={ <HomePage /> } />
                        <Route path='/login' element={ <Login /> } />
                        <Route path='/sign-up' element={ <SignUp /> } />
                        <Route path='/bookings' element={ <Bookings /> } />
                        <Route path='/calendar' element={ <Calendar /> } />
                        <Route path='/properties' element={ <Properties /> } />
                        <Route path='/performance' element={ <Performance /> } />
                        <Route path='/forgot-password' element={ <ForgotPassword /> } />
                    </Routes>
                </BrowserRouter>
</AuthProvider>
    </div>
  )
}
