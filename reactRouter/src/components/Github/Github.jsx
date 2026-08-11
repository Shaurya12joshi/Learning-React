/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

function Github() {
    
    const data = useLoaderData()
    return (
        <>
        <Header/>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            GitHub Followers: {data?.followers}
            <img src={data?.avatar_url} alt="Git Picture" width={300}/>
        </div>
        <Footer/>
        </>
    )
}

export default Github

// eslint-disable-next-line react-refresh/only-export-components
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Shaurya12joshi')
    return response.json()
}
