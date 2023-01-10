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
            <div className='lefttop w-100 d-flex'>
            <div className='leftleft w-50 d-inline-block'>
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
            <div className='leftright w-50'>
            <div className='calculate text-center'>
                <button className='btn btn-lg'>Calculate</button>
            </div>
            </div>
            </div>

            <div className='leftbottom w-100'>
            <div className="jumbotron border">
              <div className='jum-top d-flex'>
                <div className='jum-top-left align-middle my-auto w-50 d-inline-block'>
              <h4 className='text-center'><strong>Distance</strong></h4>
              </div>
              <div className='jum-top-right align-middle my-auto  w-50 d-inline-block'>
                <h2 className='text-center'><strong>1,427 kms</strong></h2>
                </div>
              </div>

              <div className='jum-bottom'>
                <div className='container d-flex'>
                  <p className='my-3'>The distance between <strong>Mumbai</strong> and <strong>Delhi</strong> via the seleted route is <strong>1,427 kms</strong>.</p>
                </div>
              </div>
 
            </div>
            </div>
        </div>

        <div className='right float-right w-50 d-flex'>
          <img className='map mx-auto' src='https://akhromieiev.com/travel/how-to-find-most-visiting-places-in-city-using-google-maps/img/wp-content-uploads-2017-09-AmsterdamMap-1024x1024.png' alt='map'/>
        </div>


        </div>
    </div>
  )
}

export default Home