import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/homePageNav';
import Footer from '../footer/footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import NumberFormat from 'react-number-format';

import '../src/style.css';


const Specializations = ['BSc (Hons) in Information Technology Specializing in Information Technology', 'BSc (Hons) in Information Technology Specializing in Computer Systems & Network Engineering', 'BSc (Hons) in Information Technology Specializing in Information Systems Engineering', 'BSc (Hons) in Information Technology Specializing in Cyber Security','BSc (Hons) in Information Technology Specializing in Interactive Media','BSc (Hons) in Information Technology Specializing in Data Science'];
function Reg() {

    const id = Math.floor(Math.random() * 100);
    
    
    const [groupId, setGroupId] = useState("RP"+id);
    const [groupPassword, setGroupPassword] = useState("");
    
    const [mem_one_name, setMemOneName] = useState("");
    const [mem_one_reg, setMemOneRegNum] = useState("");
    const [mem_one_email, setMemOneEmail] = useState("");
    const [mem_one_tel, setMemOneTel] = useState("");
    const [mem_one_specialize, setMemOneSpecialization] = useState("");

    const [mem_two_name, setMemTwoName] = useState("");
    const [mem_two_regNum, setMemTwoReg] = useState("");
    const [mem_two_email, setMemTwoEmail] = useState("");
    const [mem_two_tel, setMemTwotel] = useState("");
    const [mem_two_specialize, setMemTwoNSpecialization] = useState("");

    const [mem_three_name, setMemThreeName] = useState("");
    const [mem_three_regNum, setMemThreeReg] = useState("");
    const [mem_three_email, setMemThreeEmail] = useState("");
    const [mem_three_tel, setMemThreeTel] = useState("");
    const [mem_three_specialize, setMemThreeSpecialization] = useState("");

    const [mem_four_name, setMemFourName] = useState("");
    const [mem_four_regNum, setMemFourReg] = useState("");
    const [mem_four_email, setMemFourEmail] = useState("");
    const [mem_four_tel, setMemFourTel] = useState("");
    const [mem_four_specialize, setMemFourSpecialization] = useState("");

    function loginAsStaff(){
        window.location.href = "/Login";
    }

    function submit(e){
        e.preventDefault();
        const groupId = "RP"+id;
        const teamReg ={groupId, groupPassword, mem_one_name, mem_one_reg, mem_one_email, mem_one_tel, mem_one_specialize, mem_two_name, mem_two_regNum, mem_two_email, mem_two_tel, mem_two_specialize, mem_three_name, mem_three_regNum, mem_three_email, mem_three_tel, mem_three_specialize, mem_four_name, mem_four_regNum, mem_four_email, mem_four_tel, mem_four_specialize}
    
          axios.post("http://localhost:5000/team/team_registration",teamReg).then(() =>{
    
          Swal.fire({  
            title: "Success!",
            text: "Team Registration Success!",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
            if (okay) {
                window.location.href = "/Login";
            }
          });
    
          
        }).catch((err)=>{
    
            Swal.fire({  
            title: "Error!",
            text: "Team Registration Not Success",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
        })
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
                                    Create A Group
                            </h4>
                        </center>
                        <div class="col-sm-12 mb-4">
                            <div class="row">
                                <div class="col-sm-5">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Group ID</label>
                                        <input type="text" disabled value={groupId} class="form-control" onChange={(e) =>{
                                            setGroupId(e.target.value);
                                        }}/>
                                    </div>
                                </div>
                                <div class="col-sm-7">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Group Password</label>
                                        <input type="password" class="form-control" onChange={(e) =>{
                                            setGroupPassword(e.target.value);
                                        }}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-4">
                            <div class="card ">
                            <div class="card-body ">
                                <h5 class="card-title">Team Leader Details</h5>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Name</label>
                                    <input type="text" class="form-control" onChange={(e) =>{
                                            setMemOneName(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Student Registration Number</label>
                                    <input type="text" class="form-control" onChange={(e) =>{
                                            setMemOneRegNum(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Email</label>
                                    <input type="email" class="form-control" onChange={(e) =>{
                                            setMemOneEmail(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Telephone</label>
                                    <NumberFormat  format="##########"  class="form-control" placeholder="Telephone Number"  onChange={(e) =>{
                                        setMemOneTel(e.target.value);}}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Specialization</label>
                                    <select  class="form-select" onChange={(e) =>{
                                            setMemOneSpecialization(e.target.value);
                                        }}>
                                        <option value="">Select Specialization</option>
                                        {Specializations.map((Specialization) => (
                                            <option value={Specialization}>{Specialization}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-4">
                            <div class="card">
                            <div class="card-body ">
                                <h5 class="card-title">Member One</h5>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Member One's Name</label>
                                    <input type="text" class="form-control" onChange={(e) =>{
                                            setMemTwoName(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Member One's Student Registration Number</label>
                                    <input type="text" class="form-control"  onChange={(e) =>{
                                            setMemTwoReg(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Member One's Email</label>
                                    <input type="email" class="form-control"  onChange={(e) =>{
                                            setMemTwoEmail(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Member One's Telephone</label>
                                    <NumberFormat  format="##########"  class="form-control" placeholder="Telephone Number"  onChange={(e) =>{
                                            setMemTwotel(e.target.value);}}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Specialization</label>
                                    <select  class="form-select"  onChange={(e) =>{
                                            setMemTwoNSpecialization(e.target.value);
                                        }}>
                                        <option value="">Select Specialization</option>
                                        {Specializations.map((Specialization) => (
                                            <option value={Specialization}>{Specialization}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-4">
                            <div class="card">
                            <div class="card-body ">
                                <h5 class="card-title">Member Two</h5>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Two's Name</label>
                                    <input type="text" class="form-control"  onChange={(e) =>{
                                            setMemThreeName(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Two's Student Registration Number</label>
                                    <input type="text" class="form-control"  onChange={(e) =>{
                                            setMemThreeReg(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Two's Email</label>
                                    <input type="email" class="form-control"  onChange={(e) =>{
                                            setMemThreeEmail(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Two's Telephone</label>
                                    <NumberFormat  format="##########"  class="form-control" placeholder="Telephone Number"  onChange={(e) =>{
                                        setMemThreeTel(e.target.value);}}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Specialization</label>
                                    <select  class="form-select"  onChange={(e) =>{
                                            setMemThreeSpecialization(e.target.value);
                                        }}>
                                        <option value="">Select Specialization</option>
                                        {Specializations.map((Specialization) => (
                                            <option value={Specialization}>{Specialization}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-6 mb-4">
                            <div class="card">
                            <div class="card-body ">
                                <h5 class="card-title">Member Three</h5>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Three's Name</label>
                                    <input type="text" class="form-control"  onChange={(e) =>{
                                            setMemFourName(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Three's Student Registration Number</label>
                                    <input type="text" class="form-control"  onChange={(e) =>{
                                            setMemFourReg(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Three's Email</label>
                                    <input type="email" class="form-control"  onChange={(e) =>{
                                            setMemFourEmail(e.target.value);
                                        }}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Member Three's Telephone</label>
                                    <NumberFormat  format="##########"  class="form-control" placeholder="Telephone Number"  onChange={(e) =>{
                                        setMemFourTel(e.target.value);}}/>
                                </div>
                                <div class="mb-3 text-start mt-3">
                                    <label  class="form-label" style={{lineHeight:0}}>Team Leader's Specialization</label>
                                    <select  class="form-select"  onChange={(e) =>{
                                            setMemFourSpecialization(e.target.value);
                                        }}>
                                        <option value="">Select Specialization</option>
                                        {Specializations.map((Specialization) => (
                                            <option value={Specialization}>{Specialization}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-12 mb-4">
                                <div class="mb-3 text-end mt-4">
                                    <button type="button" class="btn btn-outline-dark" onClick={()=> window.location.href = "/RegDashboard"}>Back</button>&nbsp;&nbsp;
                                    <button type="button" class="btn btn-dark" onClick={submit}>Submit Group</button>
                                </div>
                        </div>
                    </div>
                   
                </div>
        </center>
        </div>
    </div>
  );
}

export default Reg;
