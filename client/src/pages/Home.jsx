import React from 'react'
import Navbar from '../components/Navbar'
import './Home.css'
import Input from '../components/Input'

const Home = () => {
  return (
    <div>
        <Navbar />
        <div className='half'>
        <h5 className='text-center py-5'>Let's calculate <strong>distance</strong> from Google map</h5>
        <div>
            <Input label="Origin" inputText="Select an Origin"/>
            <Input label="Destination" inputText="Select a Destination"/>
        </div>
        </div>
    </div>
  )
}

export default Home