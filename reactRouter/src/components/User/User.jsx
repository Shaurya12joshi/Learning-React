/* eslint-disable no-unused-vars */
import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { useParams } from 'react-router'

function User() {
    const {id} = useParams()
    return (
        <>
        <Header/>
        <div>User: {id} </div>
        <Footer/>
        </>
    )
}

export default User
