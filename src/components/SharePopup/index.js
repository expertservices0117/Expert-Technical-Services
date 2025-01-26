import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { IoClose } from "react-icons/io5";
import "./index.css"
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";




const SharePopup = ({ element,text }) => {
    return (
        <Popup className='popup-container'
            trigger={element}
            modal
        >
            {(close) => (
                <div className="modal-popup">
                    <div className='d-flex justify-content-end p-1'>
                        <IoClose size={20} onClick={close} style={{ cursor: "pointer" }}
                        />
                    </div>
                    <div className="modal-content">
                        <h5 className='fw-bold text-center'>{text || "Contact us"}</h5>
                        <div className='py-4 d-flex flex-column align-items-center gap-3'>

                            {/* Phone Link */}
                            <a
                                href={`tel:${"6281355853"}`} className='text-decoration-none'
                            >
                                <button className='share-btn d-flex gap-2 justify-content-center'>Call Now
                                    <IoCall size={22}/>
                                </button>
                            </a>

                            <a
                                href={`https://wa.me/${"916281355853"}?text=${encodeURIComponent('Hello, I am interested in your service!')}`}
                                target="_blank" 
                                rel="noopener noreferrer"  
                                className='text-decoration-none'
                            >
                                <button className='share-btn d-flex gap-2 justify-content-center'>
                                    Contact via WhatsApp
                                    <IoLogoWhatsapp size={22} />
                                </button>
                            </a>


                            {/* Email Link */}
                            <a
                                href={`mailto:${'expertservices0117@gmail.com'}`} className='text-decoration-none'
                            >
                                <button className='share-btn d-flex gap-2 justify-content-center'>Send an Email
                                    <MdEmail size={22}/>
                                </button>
                            </a>

                            
                        </div>
                    </div>
                </div>
            )}
        </Popup>
    )
}

export default SharePopup