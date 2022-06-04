import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/homePageNav';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import '../src/style.css';

function RegDashboard() {

  function goToStudentReg(){
    window.location.href = "/student/Reg";
  }

  function staffReg(){
    window.location.href = "/staff/StaffTReg";
  }
  return (
    <div >
       <HomePageNav/>
       <div class="global-container3"  style={{paddingTop:'5%', paddingBottom:'5%'}}>
            <center>
                <div class="container">
                    <div class="row bg-light rounded p-4">
                        <center>
                            <h4 class="card-title text-center pt-5 pb-2  text-uppercase text-dark">
                                   Are You Register As A,
                            </h4>
                        </center>
                        <div class="col-sm-2 mb-4 mt-4"></div>
                        <div class="col-sm-4 mb-4 mt-4">
                          <div class="card" >
                            <img src="https://bernardmarr.com/wp-content/uploads/2021/07/Measuring-Staff-Satisfaction-7-Reasons-Why-Your-Staff-Survey-Is-Not-Giving-You-Anything-Useful.png" style={{ width: '100%',height: '15vw',objectFit: 'cover'}} class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title text-uppercase">SLIIT Student</h5>
                              <p>Research team should consist of 4 members. Do not consider specialization when making a team</p>
                              <div class="d-grid gap-2">
                                <button  type="button" onClick={goToStudentReg} class="btn btn-dark">Go </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 mb-4 mt-4">
                          <div class="card" >
                            <img src="https://edtech4beginnerscom.files.wordpress.com/2021/05/1.png" style={{ width: '100%',height: '15vw',objectFit: 'cover'}} class="card-img-top" alt="..."/>
                            <div class="card-body">
                              <h5 class="card-title text-uppercase">SLIIT Staff</h5>
                              <p>Are you Supervisor or Co-Supervisor or Panel Member ? Then you can register through this form.</p>
                              <div class="d-grid gap-2">
                                <button type="button" onClick={staffReg}  class="btn btn-dark">Go</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-2 mb-4 mt-4"></div>
                    </div>
                </div>
            </center>
        </div>
    </div>
  );
}

export default RegDashboard;
