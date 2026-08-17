
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrite/auth'
import {loginUser, logoutUser} from '../app/authSlice'
import { Footer, Header } from './components'

function App() {

  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      if (userData) {
        dispatch(loginUser({userData}))
      } else {
        dispatch(logoutUser())
      }
    })
    .finally(() => {
      setLoading(false)
    })
  }, [])

  return(!loading ? (<>
    <div className='min-h-screen flex flex-wrap text-center bg-gray-400'> 
      <div className='w-full block'>
        <Header/>
        <main>
          TODO: {/*<Outlet/>*/}
        </main>
        <Footer/>
      </div>
    </div>
    </>) : (<div className='font-500 text-center'>Loading...</div>))
}

export default App
