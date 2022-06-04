import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../src/style.css';

function MarksAdd() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    const [marks,setMarks] = useState("");
    const [passStatus,setPassStatus] = useState("");
    const [remark,setRemark] = useState("");
    const staffID = Cookies.get('user_name');

 
    function submit(e){
        e.preventDefault();
        
        const addMarks ={id,marks, passStatus, remark}
    
          axios.put("http://localhost:5000/submit_document/addMarksForSubmmitedDocs",addMarks).then(() =>{
    
          Swal.fire({  
            title: "Success!",
            text: "Marks Adding Success!",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
            if (okay) {
                window.location.href = "/Supervisor/Supervisor_eveluvate_doc";
             
            }
          });
    
          
        }).catch((err)=>{
    
            Swal.fire({  
            title: "Error!",
            text: "Try again.Marks adding not success.",
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
                            <h3 class="card-title text-center pt-5 pb-2  text-uppercase text-dark">
                                    ADD MARKS
                            </h3>
                        </center>
                      
                        
                        <div class="col-sm-12 mb-4  text-start">
                            <div class="row">
                                <div class="col">
                                    <label>Marks</label>
                                    <input type="number" class="form-control"  onChange={(e) =>{
                                            setMarks(e.target.value);
                                        }}/>
                                </div>
                                <div class="col">
                                    <label>Pass Status</label>
                                    <select class="form-select"  onChange={(e) =>{
                                            setPassStatus(e.target.value);
                                        }}>
                                        <option>Select pass status</option>
                                        <option value="pass">Pass</option>
                                        <option value="Fail">Fail</option>
                                    </select>
                                </div>
                            </div> 
                        </div>
                        <div class="col-sm-12 mb-4  text-start">
                            <label>Remark</label>
                            <textarea class="form-control" rows="8" onChange={(e) =>{
                                            setRemark(e.target.value);
                                        }}></textarea>
                        </div>
                        <div class="col-sm-12 mb-4">
                                <div class="mb-3 text-end mt-4">
                                    <button type="button" class="btn btn-dark" onClick={submit}>Add Marks</button>
                                </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    </div>
  );
}

export default MarksAdd;
