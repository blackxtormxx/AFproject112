import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import axios from 'axios';
import '../src/style.css';

function SupervisorViewDocs() {

    const [all_submit_schema,setAll_submit_schema] = useState([]);
   

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    useEffect(() => {
        axios.get("http://localhost:5000/submit_document/viewFile/"+id)
        .then(res => setAll_submit_schema(res.data))
        .catch(error => console.log(error));
    });
  
    function addMarks(id){
        
        window.location.href = "/Supervisor/SupervisorAddMarks?id="+id;
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
                                   Submitted Documents - {id}
                            </h2>
                            <div className="text-end mt-5">
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/admin/SupervisorDashboard" } >
                                    Back 
                                </button>
                            </div>
                            <div class="table-responsive mt-3">
                                <table class="table">
                                    <thead>
                                        <tr class="bg-dark text-white">
                                            <td  style={{width: '30%'}}>Submission Id</td>
                                            <td  style={{width: '20%'}}>Submitted Date</td>
                                            <td  style={{width: '10%'}}>File</td>
                                            <td  style={{width: '20%'}}>Status</td>
                                            <td  style={{width: '20%'}} class="text-center"></td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {all_submit_schema.map((submition) => (
                                        <tr class="bg-white text-dark">
                                            <td>{submition.submissionID}</td>
                                            <td>{submition.submitDateType}</td>
                                            <td><a target="_blank" href={"https://api.cloudinary.com/v1_1/dnomnqmne/image/upload/"+submition.file} download>Download</a></td>
                                            <td>{submition.status}</td>
                                            <td class="text-center">
                                                {(submition.status == 'Marks Added')?"Marks : "+submition.marks+" ( "+submition.passStatus+")":''}
                                                <button type="button" style={{display: (submition.status == 'Marks Added')?'none':'inline'}}  class="btn btn-outline-secondary btn-sm" onClick={()=>addMarks(submition._id)}>Add Marks</button>&nbsp;&nbsp;
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                        </center>
                    </div>
                </div>
            </center>
        </div>
    </div>
  );
}

export default SupervisorViewDocs;
