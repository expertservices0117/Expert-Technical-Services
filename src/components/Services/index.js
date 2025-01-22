import "./index.css"
import services from "./services.json"
import { IoClose } from "react-icons/io5";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css'; 



const Services = () => {

  // const [viewMoreBtnStatus,setBtnStatus] = useState(false)


  // const onClickViewMore = () => {
  //   setBtnStatus((status) => !status )
  // }


  // let allservices;

  // viewMoreBtnStatus ?  allservices = services : allservices = services.slice(0,8)

  return (
    <div className='services-card' id='services'>
        <div className='container'>
            <div>
                <h2 className='services-heading d-flex justify-content-center'>
                    Our Services
                </h2>
            </div>
            <div className='d-flex justify-content-center flex-wrap gap-5 pt-5'>
                {services.map((each,index) => {
                  return (
                    <div  >
                      <Popup className='popup-container'
                        trigger={<div className='img-card' data-aos="fade-up" data-aos-duration={`1000`} data-aos-delay={`${(index+1)*50}`} key={index} >
                        <div className='zoom-img'>
                          <img src={each.imgUrl} alt={each.name} />
                        </div>
                        <p>
                          {each.name}
                        </p>
                      </div>}
                        modal 
                      >
                        {(close) => (
                          <div className="modal-container">
                            <div className='d-flex justify-content-end p-1'>
                               <IoClose size={20} onClick={close} style={{cursor:"pointer"}}
                               />
                            </div>
                            <div className="modal-content">
                              <h4 className='fw-bold'>{each.name}</h4>
                              <div className='d-flex flex-wrap gap-5 py-4'>
                                {each.services.map((each) => (
                                  <div className='d-flex flex-column align-items-center' style={{width:"100px"}}>
                                    <a href="#letsconnect" onClick={close} className='text-decoration-none'>
                                      <img src={each.imgUrl} style={{cursor:"pointer"}}  alt={each.name} width={80} height={80} className='service-img'/>
                                    </a>
                                    <p className='service-name py-1'>{each.name}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </Popup>
                    </div>
                  )
                })}
            </div>
            {/* <div className='d-flex justify-content-center' data-aos="fade-up" data-aos-duration={`1000`}>
              <button className='view-more-btn ' onClick={onClickViewMore}  >
                  {viewMoreBtnStatus ? "View Less" : "View More" }
              </button>
            </div> */}
        </div>
    </div>
  )
}

export default Services