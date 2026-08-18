import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'

function LogOutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logoutUser().then((response) => {
            if (response) {
                dispatch(logoutUser())
            }
        })
        .catch((error) => {
            throw error
        })
    }
    return (
        <button
        className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
        onClick={logoutHandler}
        >LogOut</button>
    )
}

export default LogOutBtn
