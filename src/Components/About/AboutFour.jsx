import { Link } from 'react-router-dom'

function AboutFour() {
   return (
      <div className="about-area position-relative overflow-hidden overflow-hidden space" id="about-sec">
         <div className="container shape-mockup-wrap">
            <div className="row">
               <div className="col-xl-7">
                  <div className="img-box3">
                     <div className="img1">
                        <img src="/assets/img/normal/about_3_1.jpg" alt="About" />
                     </div>
                     <div className="img2">
                        <img src="/assets/img/normal/about_3_2.jpg" alt="About" />
                     </div>
                     <div className="img3 movingX">
                        <img src="/assets/img/normal/about_3_3.jpg" alt="About" />
                     </div>
                  </div>
               </div>
               <div className="col-xl-5">
                  <div className="ps-xl-4">
                     <div className="title-area mb-20">
                        <span className="sub-title style1 ">Welcome To PStudent</span>
                        <h2 className="sec-title mb-20 pe-xl-5 me-xl-5 heading">
                           We are a group of students at PTIT!
                        </h2>
                     </div>
                     <p className="pe-xl-5">
                        PStudent is a platform that provides information and support
                        for international students in Vietnam. It is a project
                        developed by a group of students at the University of
                        Technology, Hanoi.
                     </p>
                     <p className="mb-30 pe-xl-5">
                        {" "}
                        We're based in Hanoi, Vietnam.
                     </p>
                     <div className="about-item-wrap">
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_1.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Legal Processes</h5>
                              <p className="about-item_text">
                                 We provide information and support for legal processes
                                 such as visa, work permit, and other legal matters.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_2.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">Places to Visit</h5>
                              <p className="about-item_text">
                                 We provide information and support for places to visit
                                 such as tourist attractions, restaurants, and other
                                 places of interest.
                              </p>
                           </div>
                        </div>
                        <div className="about-item style2">
                           <div className="about-item_img">
                              <img src="/assets/img/icon/about_1_3.svg" alt="" />
                           </div>
                           <div className="about-item_centent">
                              <h5 className="box-title">AI Chatbot</h5>
                              <p className="about-item_text">
                                 We provide an AI chatbot that can answer questions
                                 about legal processes, places to visit, and other
                                 information.
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className="mt-35">
                        <Link to="/contact" className="th-btn style3 th-icon">
                           Contact With Us
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
            <div
               className="shape-mockup movingX d-none d-xxl-block"
               style={{ top: '0%', left: '-18%' }}
            >
               <img src="/assets/img/shape/shape_2_1.png" alt="shape" />
            </div>
            <div
               className="shape-mockup jump d-none d-xxl-block"
               style={{ top: '28%', right: '-15%' }}
            >
               <img src="/assets/img/shape/shape_2_2.png" alt="shape" />
            </div>
            <div
               className="shape-mockup spin d-none d-xxl-block"
               style={{ top: '18%', left: '-112%' }}
            >
               <img src="/assets/img/shape/shape_2_3.png" alt="shape" />
            </div>
            <div
               className="shape-mockup movixgX d-none d-xxl-block"
               style={{ bottom: '18%', right: '-12%' }}
            >
               <img src="/assets/img/shape/shape_2_4.png" alt="shape" />
            </div>
         </div>
      </div>
   )
}

export default AboutFour
