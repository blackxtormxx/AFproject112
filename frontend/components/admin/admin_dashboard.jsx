import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import '../src/style.css';

function AdminDashboard() {

  function goToStudentReg(){
    window.location.href = "/student/Reg";
  }
 
  function adminStaffManage(){
    window.location.href = "/admin/AdminViewStaff";
  } 

  function ViewMarkingschemes(){
    window.location.href = "/admin/ViewMarkingschemes";
  }

  function StudentGroupManage(){
    window.location.href = "/admin/StudentGroupManage";
  }

  function AdminViewDeadLines(){
    window.location.href = "/admin/AdminViewDeadLines";
  }
  return (
    <div >
       <HomePageNav/>
       <div class="global-container3"  style={{paddingTop:'5%', paddingBottom:'5%'}}>
            <center>
                <div class="container">
                    <div class="row bg-light rounded p-4">
                        <center>
                            <h2 class="card-title text-center pt-5 pb-2  text-uppercase text-dark">
                                   ADMIN DASHBOARD
                            </h2>
                        </center>
                        <div class="col-sm-4 mb-4 mt-4">
                          <div class="card" >
                            <img src="https://edtech4beginnerscom.files.wordpress.com/2021/05/1.png" style={{ width: '100%',height: '15vw',objectFit: 'cover'}} class="card-img-top" alt="..."/>
                            <div class="card-body m-0 p-0 rounded" >
                              <div class="d-grid gap-2">
                                <button type="button " onClick={adminStaffManage}  class="btn btn-dark rounded-0">STAFF MANAGE</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 mb-4 mt-4">
                          <div class="card" >
                            <img src="https://eitrawmaterials.eu/wp-content/uploads/2019/05/Label-brochure-1.jpg" style={{ width: '100%',height: '15vw',objectFit: 'cover'}} class="card-img-top" alt="..."/>
                            <div class="card-body m-0 p-0 rounded" >
                              <div class="d-grid gap-2">
                                <button type="button "   class="btn btn-dark rounded-0" onClick={StudentGroupManage}>STUDENT GROUP MANAGE</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 mb-4 mt-4">
                          <div class="card" >
                            <img src="https://thumbs.dreamstime.com/b/d-green-check-marks-red-mark-30276012.jpg" style={{ width: '100%',height: '15vw',objectFit: 'cover'}} class="card-img-top" alt="..."/>
                            <div class="card-body m-0 p-0 rounded" >
                              <div class="d-grid gap-2">
                                <button type="button " onClick={ViewMarkingschemes} class="btn btn-dark rounded-0 text-uppercase">marking schemes</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-sm-4 mb-4 mt-4">
                          <div class="card" >
                            <img src="https://www.electrochem.org/wp-content/uploads/2018/01/deadline-web.jpg" style={{ width: '100%',height: '15vw',objectFit: 'cover'}} class="card-img-top" alt="..."/>
                            <div class="card-body m-0 p-0 rounded" >
                              <div class="d-grid gap-2">
                                <button type="button "  class="btn btn-dark rounded-0 text-uppercase" onClick={AdminViewDeadLines}>Create Deadlines</button>
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    </div>
  );
}

export default AdminDashboard;
