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
        <div className='left float-left'>
            <div className='input-loc d-inline-block'>
            <Input label="Origin" inputText="Select an Origin"/>
            <div className='mb-4'>
                <Input label="Stop" inputText="Select a Stop"/>
                <div className='add-stop'>
                <i className="fa-solid fa-circle-plus d-inline-block"></i>
                <p className='d-inline-block mx-2'>Add another stop</p>
                </div>
            </div>
            <Input label="Destination" inputText="Select a Destination"/>
            </div>
            <div className='calculate d-inline-block align-middle'>
                <button className='btn '>Calculate</button>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Home