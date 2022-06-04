import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/homePageNav';
import Footer from '../footer/footer';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../src/style.css';

function TeamDashboard() {

    const [name, setFullName] = useState("");
    const [userType, setStaffType] = useState("");
    const [email, setEmail] = useState("");
    const [Specialize, setSpecialize] = useState("");
    const [tel, setTel] = useState("");
    const [fax, setFax] = useState("");
    const [password, setRegpassword] = useState("");

    const [emailStatus, setEmailStatus] = useState("");
    const [emailColor, setEmailColor] = useState("");
    const [Qualifications, setQualifications] = useState("");
    const [cpassword, setCPassword] = useState("");
    const [Messagematchpassword, setMessagematchpassword] = useState("");
    const [MessagematchpasswordColor, setMessagematchpasswordColor] = useState("");
    const [Messagepassword, setMessagepassword] = useState("");
    const [MessagepasswordColor, setMessagepasswordColor] = useState("");
    
    function setRegcpasswordFun(e)
    {
        const c_pass = e ;
        if(c_pass == password){
            setMessagematchpassword("Passwords are matching");
            setMessagematchpasswordColor('green');
        }else{
            setMessagematchpassword("Passwords are not matching");
            setMessagematchpasswordColor('red');
      }
      setCPassword(c_pass);
    }

    function setRegpasswordFun(e)
    {
      const password = e ;
      if(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) 
        {
          setMessagepassword("Password is strong");
          setMessagepasswordColor('#0A734E');
        }else{
          setMessagepassword("Password is not strong");
          setMessagepasswordColor('#E10B0B');
        }
      setRegpassword(password);
    }

    function setFunEmail(e){
        const email_Add = e;
        if(validateEmail(email_Add)){
            setEmailStatus("Email is valid");
            setEmailColor('green');
        }else{
            setEmailStatus("Email is invalid");
            setEmailColor('red');
        }
        setEmail(email_Add);
    }

    function validateEmail(email) 
    {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function submit(e){
        e.preventDefault();
        const eductions = Qualifications.toString();
        const staffReg ={password, name, email, tel, fax, eductions, userType,Specialize}
    
          axios.post("http://localhost:5000/staff/staff_registration",staffReg).then(() =>{
    
          Swal.fire({  
            title: "Success!",
            text: "Staff Registration Success!",
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
            text: "Staff Registration Not Success",
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
                                   Staff Registration
                            </h4>
                        </center>
                        <div class="col-sm-12 mb-4">
                            <div class="row">
                                <div class="col-sm-8">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Full Name</label>
                                        <input type="text" class="form-control" onChange={(e) =>{
                                            setFullName(e.target.value);
                                        }}/>
                                    </div>
                                </div> 
                                <div class="col-sm-4">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Staff Type</label>
                                        <select type="text" class="form-select"  onChange={(e) =>{
                                            setStaffType(e.target.value);
                                        }} >
                                            <option value="">Select Staff Type</option>
                                            <option value="Supervisor">Supervisor</option>
                                            <option value="Co-Supervisor">Co-Supervisor</option>
                                            <option value="Panel Member">Panel Member</option>
                                        </select>
                                    </div>
                                </div> 
                            </div>
                            <div class="row">
                                <div class="col">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Email</label>
                                        <input type="text" class="form-control"  onChange={(e) =>{
                                            setFunEmail(e.target.value);
                                        }} />
                                        <span style={{fontSize: '14px' , color:emailColor}}>{emailStatus}</span>
                                    </div> 
                                </div>
                                <div class="col">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Telephone Number</label>
                                        <NumberFormat  format="##########"  class="form-control" onChange={(e) =>{
                                            setTel(e.target.value);
                                        }}/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Fax Number</label>
                                        <NumberFormat  format="##########"  class="form-control" onChange={(e) =>{
                                            setFax(e.target.value);
                                        }}/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Specialize For</label>
                                        <select type="text" class="form-select"  onChange={(e) =>{
                                            setSpecialize(e.target.value);
                                        }}>
                                            <option value="">Select Specialize For</option>
                                            <option value="Machine Learning">Machine Learning</option>
                                            <option value="Web Technology">Web Technology</option>
                                            <option value="Networking">Networking</option>
                                            <option value="Cryptography">Cryptography</option>
                                            <option value="IOT">IOT</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}> Password</label>
                                        <input type="password" class="form-control" onChange={(e) =>{
                                            setRegpasswordFun(e.target.value);
                                        }}/>
                                        <span style={{fontSize: '14px' , color:MessagepasswordColor}}>{Messagepassword}</span>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="mb-3 text-start mt-4">
                                        <label  class="form-label" style={{lineHeight:0}}>Confirm Password</label>
                                        <input type="password" class="form-control" onChange={(e) =>{
                                            setRegcpasswordFun(e.target.value);
                                        }}/>
                                        <span style={{fontSize: '14px' , color:MessagematchpasswordColor}}>{Messagematchpassword}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="mb-3 text-start mt-4">
                                    <label  class="form-label" style={{lineHeight:0}}>Qualifications</label>
                                    <CKEditor
                                        editor={ ClassicEditor }
                                        data=""
                                        onChange={(event, editor) =>{
                                        const data = editor.getData();
                                        setQualifications(data);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 mb-4">
                                <div class="mb-3 text-end ">
                                    <button type="button" class="btn btn-outline-dark" onClick={()=> window.location.href = "/RegDashboard"}>Back</button>&nbsp;&nbsp;
                                    <button type="button" class="btn btn-dark" onClick={submit}>Submit</button>
                                </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    </div>
  );
}

export default TeamDashboard;
