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

function PanelViewTeam() {
  const username = Cookies.get('user_name');
  const [researchTopic, setEvolution] = useState("");
  
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const id = urlParams.get('id');

  const [Supervisor, setSupervisorName] = useState([]);
  const [TeamDetails,setTeamDetails] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:5000/team/OneTeam/"+id)
      .then(res => setTeamDetails(res.data))
      .catch(error => console.log(error));
  });

    function topicEvolution()
    {
        const description =    researchTopic.toString();
        const submitEvolutions ={
            id,
            description
        }

        axios.put("http://localhost:5000/team/submitEvolution",submitEvolutions).then(() =>{
            Swal.fire({  
            title: "Success!",
            text: "Sent Topic Evolution.",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
                window.location.href = "/panel/PanelViewTeam?id="+id;
            });

            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Not Sent Topic Evolution.",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }

    function back(){
        window.location.href = "/panel/PanelStudentGroup";
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
                          <button type="button"   class="btn btn-outline-dark btn-sm"  data-bs-toggle="modal" data-bs-target="#exampleModal">Topic Evaluation</button>&nbsp;
                        </div>
                        <div style={{display: (TeamDetail.topicStatus == 'Not Submit')?'none':'inline'}}>
                            <p class="modal-title text-dark "><b>Selected Topic :</b> {TeamDetail.researchTopic}</p>
                            <p class="modal-title text-dark "><b>Topic status :</b> {TeamDetail.topicStatus}</p>
                            <p class="modal-title text-dark "><b>Team status :</b> <span style={{color:(TeamDetail.status == 'Active')?'Green' : 'Red'}}>{(TeamDetail.status == 'Active')?'Approved' : 'Rejected'}</span></p>
                            <p class="modal-title text-dark "><b>Research Category :</b> <span >{TeamDetail.researchCategory}</span></p>
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered modal-xl">
                                    <div class="modal-content">
                                    <div class="modal-header bg-dark text-start">
                                        <h5 class="modal-title text-warning" id="exampleModalLabel">TOPIC EVOLUTION</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-start">
                                        <div class="mb-3 text-start mt-4">
                                            <label  class="form-label" style={{lineHeight:0}}>Write Evolution</label>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data=""
                                                onChange={(event, editor) =>{
                                                const data = editor.getData();
                                                    setEvolution(data);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div class="modal-footer border-0">
                                        <button type="button" class="btn btn-primary" onClick={topicEvolution}>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br/>
                        <h3 class="mt-4">About Project</h3>
                        <hr/>
                        <div style={{fontSize:'15px', display: (TeamDetail.topicStatus != 'Reject')?'inline':'none'}} className="mt-3"
                        dangerouslySetInnerHTML={{
                            __html: TeamDetail.description
                        }}></div>

                        <h3 class="mt-5 pt-5 pb-4">Evolution</h3>
                        <hr/>
                        <div style={{fontSize:'15px', display: (TeamDetail.topicStatus != 'Reject')?'inline':'none'}} className="mt-3"
                        dangerouslySetInnerHTML={{
                            __html: TeamDetail.evolution
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

export default PanelViewTeam;
