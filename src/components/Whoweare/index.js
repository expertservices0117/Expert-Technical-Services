import React from 'react'
import "./index.css"

const Whoweare = () => {
  return (
    <div className='who-we-are-bg' id='about'>
        <div className='overlay d-flex flex-column justify-content-center'>
            <div className='container'>
                <div className='d-flex flex-column gap-5'>
                    <h2 className='who-we-are-title d-flex justify-content-center'>Who we are</h2>
                    <div className='row d-flex justify-content-center'>
                        <div className='col-md-6'>
                            <p className='who-we-are-description'>
                                At Expert Professional Services, we are a trusted partner in the construction industry, offering specialized technical services designed to elevate the quality, efficiency, and safety of construction projects. With years of experience and a deep understanding of the unique
                                challenges in construction, we provide innovative, reliable, and sustainable solutions that help 
                                our clients achieve successful project outcomes on time and within budget.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whoweare