import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../src/style.css';

function SubmitDocs() {

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const submissionID = urlParams.get('id');
    const submissionTitle = urlParams.get('title');
    const groupNumber = urlParams.get('username');
   
    const [imageSelected, setimageSelected] = useState("");
    
   
    

    function submit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append("file" ,imageSelected);
        formData.append("upload_preset", "ml_default");
        
        axios.post("https://api.cloudinary.com/v1_1/dnomnqmne/image/upload",formData).then((response)=>{
        const file =imageSelected.name;
        const addSubmission ={groupNumber,  submissionID, file}
    
          axios.post("http://localhost:5000/submit_document/addFiles",addSubmission).then(() =>{
    
          Swal.fire({  
            title: "Success!",
            text: "Submission Success!",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
            if (okay) {
                window.location.href = "/student/TeamDashboard";
             
            }
          });
    
          
        }).catch((err)=>{
    
            Swal.fire({  
            title: "Error!",
            text: "Try again.Submission not success.",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
        })
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
                                   Submit Documents
                            </h3>
                        </center>
                        <div class="col-sm-12 mb-4 mt-5  text-start">
                             <h5>Task : {submissionTitle}</h5>
                        </div>
                        <div>
                       
                        </div>
                        <div class="col-sm-12 mb-4  text-start">
                            <label>Upload Documents</label>
                            <input type="file" onChange={(e) =>{
                                            setimageSelected(e.target.files[0]);
                                            }} className="form-control" id="customFile" />
                        </div>

                        <div class="col-sm-12 mb-4">
                                <div class="mb-3 text-end mt-4">
                                    <button type="button" class="btn btn-dark" onClick={submit}>Submit Documents</button>
                                </div>
                        </div>
                    </div>
                </div>
            </center>
        </div>
    </div>
  );
}

export default SubmitDocs;
