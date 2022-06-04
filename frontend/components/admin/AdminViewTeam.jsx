import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import moment from 'moment';
import Cookies from 'js-cookie';
import '../src/style.css';

function AdminViewTeam() {
    const username = Cookies.get('user_name');
    const [panelId, setPanelId] = useState("");
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [TeamDetails,setTeamDetails] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/team/OneTeam/"+id)
        .then(res => setTeamDetails(res.data))
        .catch(error => console.log(error));
    });

    
    const [AllPanels,setAllPanels] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/staff/AllPanels")
        .then(res => setAllPanels(res.data))
        .catch(error => console.log(error));
    });

    function back(){
        window.location.href = "/admin/StudentGroupManage";
    }

    function savePanel(e){

        const updateMS ={
            id,
            panelId
        }

        axios.put("http://localhost:5000/team/updatePanel",updateMS).then(() =>{
            Swal.fire({  
            title: "Success!",
            text: "Panel Added",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
                if (okay) {
                  
                }
            });

            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Panel Not Added",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }

  return (
    <div>
       <HomePageNav/>
       <div class="global-container3"  style={{paddingTop:'5%', paddingBottom:'5%'}}>
            <center>
            {TeamDetails.map((TeamDetail,key) => (
                <div class="container">
                    <div class="row bg-light rounded p-4">
                        <center>
                            <h2 class="card-title text-center pt-2 pb-2  text-uppercase text-dark">
                                   Your Group Details
                            </h2>
                            <p style={{lineHeight:'0%'}} class="mb-3">Team Id - {id}</p>
                        </center>
                       
                        <div class="text-start mt-3">
                        <div class="text-end mt-4">
                          <button type="button" onClick={back}  class="btn btn-outline-dark btn-sm">Back</button>&nbsp;
                        </div>
                        <div class="alert alert-secondary mt-1" role="alert">
                            <div class="mb-3">
                                <label class="form-label">Allcate Panel For Team</label>
                                <select  class="form-select" onChange={(e) =>{
                                                setPanelId(e.target.value);
                                            }}> 
                                            <option>Select A Panel</option>
                                        {AllPanels.map((panel) => (
                                            <option value={panel.groupId}>{panel.groupId}</option>
                                        ))}
                                </select>
                            </div>
                            <div class="text-end border-0">
                                <button type="button" class="btn btn-success btn-sm" onClick={savePanel} >Save</button>
                            </div>                
                        </div>
                        <div style={{display: (TeamDetail.topicStatus == 'Not Submit')?'none':'inline'}}>
                            <p class="modal-title text-dark "><b>Selected Topic :</b> {TeamDetail.researchTopic}</p>
                            <p class="modal-title text-dark "><b>Topic status :</b> {TeamDetail.topicStatus}</p>
                            <p class="modal-title text-dark "><b>Team status :</b> <span style={{color:(TeamDetail.status == 'Active')?'Green' : 'Red'}}>{(TeamDetail.status == 'Active')?'Approved' : 'Rejected'}</span></p>
                            <p class="modal-title text-dark "><b>Panel ID :</b> <span>{TeamDetail.panelId}</span></p>
                            <p class="modal-title text-dark "><b>Research Category :</b> <span >{TeamDetail.researchCategory}</span></p>
                        </div>
                        <br/>
                        <div style={{display: (TeamDetail.topicStatus == 'Reject')?'inline':'none'}}>
                            <div class="alert alert-danger mt-3" role="alert">
                                    Your Research Topic Rejected. Please Re-submit New Topic.  <button type="button" class="btn btn-dark btn-sm" data-bs-target="#reSubmit" data-bs-toggle="modal" >Click Me For Submit</button>

                            </div>
                        </div>
                        <div style={{fontSize:'15px', display: (TeamDetail.topicStatus != 'Reject')?'inline':'none'}} className="mt-3"
                        dangerouslySetInnerHTML={{
                            __html: TeamDetail.description
                        }}></div>
                        </div>
                        <div class="col-sm-6 mb-4 mt-3">
                            <div class="card ">
                            <div class="card-body ">
                                <h5 class="card-title">Team Leader Details</h5>
                                <div class="mb-2 text-start mt-5">
                                    <label  class="form-label" > Name : {TeamDetail.mem_one_name}</label>
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Registration Number :  {TeamDetail.mem_one_reg}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Email : {TeamDetail.mem_one_email}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Telephone : {TeamDetail.mem_one_tel}</label>
                                    
                                </div>
                                <div class="mb-2 text-start ">
                                    <label  class="form-label" >Specialization : <br/>{TeamDetail.mem_one_specialize}</label>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-4  mt-3">
                            <div class="card ">
                            <div class="card-body ">
                                <h5 class="card-title">First Member's Details</h5>
                                <div class="mb-2 text-start mt-5">
                                    <label  class="form-label" > Name : {TeamDetail.mem_two_name}</label>
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Registration Number :  {TeamDetail.mem_two_regNum}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Email : {TeamDetail.mem_two_email}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Telephone : {TeamDetail.mem_two_tel}</label>
                                    
                                </div>
                                <div class="mb-2 text-start ">
                                    <label  class="form-label" >Specialization : <br/>{TeamDetail.mem_two_specialize}</label>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-4  mt-2">
                            <div class="card ">
                            <div class="card-body ">
                                <h5 class="card-title">Second Member's Details</h5>
                                <div class="mb-2 text-start mt-5">
                                    <label  class="form-label" > Name : {TeamDetail.mem_three_name}</label>
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Registration Number :  {TeamDetail.mem_two_regNum}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Email : {TeamDetail.mem_three_email}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Telephone : {TeamDetail.mem_three_tel}</label>
                                    
                                </div>
                                <div class="mb-2 text-start ">
                                    <label  class="form-label" >Specialization : <br/>{TeamDetail.mem_three_specialize}</label>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-4  mt-2">
                            <div class="card ">
                            <div class="card-body ">
                                <h5 class="card-title">Fourth Member's Details</h5>
                                <div class="mb-2 text-start mt-5">
                                    <label  class="form-label" > Name : {TeamDetail.mem_four_name}</label>
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Registration Number :  {TeamDetail.mem_four_regNum}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Email : {TeamDetail.mem_four_email}</label>
                                    
                                </div>
                                <div class="mb-2 text-start">
                                    <label  class="form-label" >Telephone : {TeamDetail.mem_four_tel}</label>
                                    
                                </div>
                                <div class="mb-2 text-start ">
                                    <label  class="form-label" >Specialization : <br/>{TeamDetail.mem_four_specialize}</label>
                                    
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
              ))}
            </center>
        </div>
    </div>
  );
}

export default AdminViewTeam;
