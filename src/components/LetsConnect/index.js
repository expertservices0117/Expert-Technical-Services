import React from 'react'
import "./index.css"
import SharePopup from '../SharePopup'

const LetsConnect = () => {
  return (
    <div className='let-connect-bg d-flex flex-column gap-5 justify-content-center align-items-center' id='letsconnect'>
        <p className='lets-connect-text py-2' data-aos="fade-up" data-aos-duration={`1000`}
              data-aos-delay="100">
            ANY JOB, ANY TIME, WE’VE GOT YOU COVERED—CALL NOW!
        </p>
        <SharePopup element={
          <div data-aos="fade-up" data-aos-duration={`1000`}>
              <button className='lets-connect-btn'   >
                Let's Connect
            </button>
          </div>
        }/>
    </div>
  )
}

export default LetsConnect