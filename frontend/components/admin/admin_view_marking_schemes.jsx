import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../src/style.css';

function ViewMarkingschemes() {

    const [all_MarkingSchema,setAllMarkingSchema] = useState([]);
    const [markingSchemes,setMARKINGSCHEMES] = useState("");
    const [title,setTitle] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/markingSchemes/AllMarkingSchema")
        .then(res => setAllMarkingSchema(res.data))
        .catch(error => console.log(error));
    });
  
    function saveData(e){
        e.preventDefault();
        const description = markingSchemes.toString();
        const addMarkingSchema ={title,description}
    
          axios.post("http://localhost:5000/markingSchemes/addMarkingSchema",addMarkingSchema).then(() =>{
    
          Swal.fire({  
            title: "Success!",
            text: "Marking Schemes Adding Success!",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
            if (okay) {
                window.location.href = "/admin/ViewMarkingschemes";
            }
          });
    
          
        }).catch((err)=>{
    
            Swal.fire({  
            title: "Error!",
            text: "Marking Schemes Adding Not Success",
            icon: 'error',
            confirmButtonText: "OK",
            type: "success"})
        })
    }

    function updateMarkingSchema(id,status){
          
        const updateMS ={
            id,
            status
        }

        axios.put("http://localhost:5000/markingSchemes/updateMarkingSchema",updateMS).then(() =>{
            Swal.fire({  
            title: "Success!",
            text: "Marking Schemes Updated",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
                if (okay) {
                    axios.get("http://localhost:5000/markingSchemes/AllMarkingSchema")
                    .then(res => setAllMarkingSchema(res.data))
                    .catch(error => console.log(error));
                }
            });

            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Marking Schemes Not Updated",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }

    function deleteMarkingSchema(id){

        axios.delete("http://localhost:5000/markingSchemes/deleteMarkingSchema/"+id).then(() =>{
            Swal.fire({  
            title: "Success!",
            text: "Marking Schema Deleted ",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
                if (okay) {
                    axios.get("http://localhost:5000/markingSchemes/AllMarkingSchema")
                    .then(res => setAllMarkingSchema(res.data))
                    .catch(error => console.log(error));
                }
            });

            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Marking Schema Not Deleted",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }
    
    function viewMarkingSchema(id){
        window.location.href = '/admin/OneMarkingSchemaView?id='+id;
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
                                   MARKING SCHEMES MANAGEMENT
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
                                        <h5 class="modal-title text-warning" id="exampleModalLabel">ADD MARKING SCHEMES</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body text-start">
                                        <div class="mb-3">
                                            <label class="form-label">Title</label>
                                            <input type="text" class="form-control" onChange={(e) =>{
                                            setTitle(e.target.value);
                                        }}/>
                                        </div>
                                        <div class="mb-3 text-start mt-4">
                                            <label  class="form-label" style={{lineHeight:0}}>Marking Schemas</label>
                                            <CKEditor
                                                editor={ ClassicEditor }
                                                data=""
                                                onChange={(event, editor) =>{
                                                const data = editor.getData();
                                                setMARKINGSCHEMES(data);
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
                                            <td  style={{width: '60%'}}>Title</td>
                                            <td  style={{width: '20%'}}>Status</td>
                                            <td  style={{width: '20%'}} class="text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {all_MarkingSchema.map((MarkingSchema) => (
                                        <tr class="bg-white text-dark">
                                            <td>{MarkingSchema.title}</td>
                                            <td>{MarkingSchema.status}</td>
                                            <td class="text-center">
                                                <button type="button"  class="btn btn-outline-danger btn-sm" onClick={()=> deleteMarkingSchema(MarkingSchema._id)}>Delete</button>&nbsp;&nbsp;
                                                <button type="button"  class="btn btn-outline-secondary btn-sm" onClick={()=>viewMarkingSchema(MarkingSchema._id)}>View</button>&nbsp;&nbsp;
                                                <button type="button" style={{display: (MarkingSchema.status === 'Deactivate')?'inline':'none'}} class="btn btn-outline-success btn-sm" onClick={()=>updateMarkingSchema(MarkingSchema._id,'Active')}>Active</button>&nbsp;&nbsp;
                                                <button type="button" style={{display: ((MarkingSchema.status === 'Active'))?'inline':'none'}} class="btn btn-outline-warning btn-sm" onClick={()=>updateMarkingSchema(MarkingSchema._id,'Deactivate')}>Deactivate</button>&nbsp;&nbsp;
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

export default ViewMarkingschemes;
