import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { saveAs } from "file-saver";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../src/style.css';

function ViewDeadLines() {

    const [AllDeadLine,setAllDeadLine] = useState([]);
    const [DeadLineDis,setDeadLineDis] = useState("");
    const [title,setTitle] = useState("");
    const [imageSelected, setimageSelected] = useState("");
    const [deadLineDateTime, setDeadLineDateTime] = useState("");
    const [submissionType, setSubmissionType] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/deadLine/AllDeadLine")
        .then(res => setAllDeadLine(res.data))
        .catch(error => console.log(error));
    });
  
    function saveData(e){
        const formData = new FormData();
        formData.append("file" ,imageSelected);
        formData.append("upload_preset", "ml_default");
        e.preventDefault();
        const description = DeadLineDis.toString();
        
        axios.post("https://api.cloudinary.com/v1_1/dnomnqmne/image/upload",formData).then((response)=>{
            const FileName =imageSelected.name;
            const addDeadLine ={title, deadLineDateTime, description, FileName,submissionType}
    
            axios.post("http://localhost:5000/deadLine/addDeadLine",addDeadLine).then(() =>{
    
            Swal.fire({  
                title: "Success!",
                text: "Dead Line Adding Success!",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                if (okay) {
                    window.location.href = "/admin/AdminViewDeadLines";
                }
            });
    
        }).catch((err)=>{
    
            Swal.fire({  
            title: "Error!",
            text: "Dead Line Adding Not Success",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
        })
      });
    }

    function deleteDeadLine(id){

        axios.delete("http://localhost:5000/deadLine/deleteDeadLine/"+id).then(() =>{
            Swal.fire({  
            title: "Success!",
            text: "Dead Line Deleted ",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
                if (okay) {
                    axios.get("http://localhost:5000/deadLine/AllDeadLine")
                    .then(res => setAllDeadLine(res.data))
                    .catch(error => console.log(error));
                }
            });

            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Dead Line Not Deleted",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }
    
    function viewDeadLine(id){
        window.location.href = '/admin/OneDeadline?id='+id;
    }


    const download = (filename) => {
        saveAs(
          "https://res.cloudinary.com/dnomnqmne/image/upload/v1653733238/"+filename,
          filename
        );
    };
    
    return (
    <div >
       <HomePageNav/>
       <div class="global-container3"  style={{paddingTop:'5%', paddingBottom:'5%'}}>
            <center>
                <div class="container">
                    <div class="row bg-light rounded p-4">
                        <center>
                            <h2 class="card-title text-center pt-5 pb-2  text-uppercase text-dark">
                                   DEADLINE MANAGEMENT
                            </h2>
                            <div className="text-end mt-5">
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    Add 
                                </button>&nbsp;&nbsp;
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/admin/AdminDashboard" } >
                                    Back 
                                </button>
                            </div>
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered modal-xl">
                                    <div class="modal-content">
                                    <div class="modal-header bg-dark text-start">
                                        <h5 class="modal-title text-warning" id="exampleModalLabel">ADD DEADLINE</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-start">
                                        <div class="mb-3">
                                            <label class="form-label">Title</label>
                                            <input type="text" class="form-control" onChange={(e) =>{
                                                setTitle(e.target.value);
                                            }}/>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Submission Type</label>
                                            <select  class="form-control" onChange={(e) =>{
                                                setSubmissionType(e.target.value);
                                            }}> 
                                                 <option>Select Submission Type</option>
                                                 <option value="Document">Document</option>
                                                 <option value="Presentation">Presentation</option>
                                            </select>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Deadline Time And Date</label>
                                            <input type="datetime-local" class="form-control" onChange={(e) =>{
                                                setDeadLineDateTime(e.target.value);
                                            }}/>
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Documents / Templates</label>
                                            <input type="file" onChange={(e) =>{
                                            setimageSelected(e.target.files[0]);
                                            }} className="form-control" id="customFile" />
                                        </div>
                                        <div class="mb-3 text-start mt-4">
                                            <label  class="form-label" style={{lineHeight:0}}>Descriptions</label>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data=""
                                                onChange={(event, editor) =>{
                                                const data = editor.getData();
                                                setDeadLineDis(data);
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div class="modal-footer border-0">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onClick={saveData}>Save</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive mt-3">
                                <table class="table">
                                    <thead>
                                        <tr class="bg-dark text-white">
                                            <td  >Title</td>
                                            <td  >Dead Line Date & Time</td>
                                            <td  >File Download</td>
                                            <td  >Submission Type</td>
                                            <td  >Status</td>
                                            <td   class="text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {AllDeadLine.map((DeadLine) => (
                                        <tr class="bg-white text-dark">
                                            <td>{DeadLine.title}</td>
                                            <td>{DeadLine.deadLineDateTime}</td>
                                            <td><button type="button" class="btn btn-outline-dark btn-sm" onClick={()=> download(DeadLine.FileName)}>Download</button></td>
                                            <td>{DeadLine.submissionType}</td>
                                            <td>{DeadLine.status}</td>
                                            <td class="text-center">
                                                <button type="button"  class="btn btn-outline-danger btn-sm" onClick={()=> deleteDeadLine(DeadLine._id)}>Delete</button>&nbsp;&nbsp;
                                                <button type="button"  class="btn btn-outline-secondary btn-sm" onClick={()=>viewDeadLine(DeadLine._id)}>View</button>&nbsp;&nbsp;
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

export default ViewDeadLines;
