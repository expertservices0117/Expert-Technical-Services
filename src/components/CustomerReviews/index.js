import React from 'react'
import "./index.css"
import reviews from "./reviews.json"

const CustomerReviews = () => {
  return (
    <div className='container py-5 '>
        <h2 className='happy-cus-heading d-flex justify-content-center'>HAPPY CUSTOMERS</h2>
        <div className='row d-flex justify-content-center pt-5'>
            <div className='col-10 col-md-6'>
                {reviews.map((each,index) => {

                    console.log(index)

                    return index % 2 === 0 ? (
                        <div className='row mb-2  d-md-flex justify-content-end'>
                          <div className='col-11 col-md-7 d-flex review-card '>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="8.8 9.7 81 81.3"
                                className='svg-text' xmlns="http://www.w3.org/2000/svg" height={35} width={50} viewBox="8.8 9.7 81 81.3"  role="presentation" aria-hidden="true">
                                    <g>
                                        <path d="M8.8 91V59.9c0-27.7 10-44 31.8-50.2v17c-10.4 4.5-14.5 13.8-14.2 30.8h14.2V91H8.8z" style={{fill: "rgb(43,108,163)"}}></path>
                                        <path d="M58 91V59.9c0-27.7 10-44 31.8-50.2v17c-10.4 4.5-14.5 13.8-14.2 30.8h14.2V91H58z" style={{fill: "rgb(43,108,163)"}}></path>
                                    </g>
                                </svg>
                                <p className='text-center'>
                                    {each.review}
                                </p>
                          </div>
                          <div className='col-11 col-md-7 d-flex justify-content-end'>
                                <p className='customer-name'>
                                    - {each.name}
                                </p>
                          </div>
                        </div>
                    ) : 
                    <div className='row  mb-2  d-md-flex content-flex'>
                        <div className='col-11 col-md-7 d-flex review-card  '>
                                <svg preserveAspectRatio="xMidYMid meet" data-bbox="8.8 9.7 81 81.3"
                                className='svg-text' xmlns="http://www.w3.org/2000/svg" height={35} width={50} viewBox="8.8 9.7 81 81.3"  role="presentation" aria-hidden="true">
                                    <g>
                                        <path d="M8.8 91V59.9c0-27.7 10-44 31.8-50.2v17c-10.4 4.5-14.5 13.8-14.2 30.8h14.2V91H8.8z" style={{fill: "rgb(43,108,163)"}}></path>
                                        <path d="M58 91V59.9c0-27.7 10-44 31.8-50.2v17c-10.4 4.5-14.5 13.8-14.2 30.8h14.2V91H58z" style={{fill: "rgb(43,108,163)"}}></path>
                                    </g>
                                </svg>
                                <p className='text-center'>
                                    {each.review}
                                </p>
                          </div>
                          <div className='col-11 col-md-7 d-flex justify-content-end'>
                                <p className='customer-name'>
                                    - {each.name}
                                </p>
                          </div>
                    </div>

                })}
            </div>
        </div>
    </div>
  )
}

export default CustomerReviews