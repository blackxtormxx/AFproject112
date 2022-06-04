import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import axios from 'axios';
import Swal from 'sweetalert2';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { saveAs } from "file-saver";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '../src/style.css';

function PresentationEvolution() {

    const [AllDeadLine,setAllDeadLine] = useState([]);
    const [DeadLineDis,setDeadLineDis] = useState("");
    const [title,setTitle] = useState("");
    const [imageSelected, setimageSelected] = useState("");
    const [deadLineDateTime, setDeadLineDateTime] = useState("");
    const [submissionType, setSubmissionType] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/deadLine/OnlyPresentationDeadLine")
        .then(res => setAllDeadLine(res.data))
        .catch(error => console.log(error));
    });

    const download = (filename) => {
        saveAs(
          "https://res.cloudinary.com/dnomnqmne/image/upload/v1653733238/"+filename,
          filename
        );
    };

    function addMarks(id,title,submissionType){
        window.location.href = "/panel/PanelMarksAdd?id="+id+"&title="+title+"&submissionType="+submissionType;     
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
                                   DEADLINE MANAGEMENT
                            </h2>
                            <div className="text-end mt-5">
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/panel/PanelDashboard" } >
                                    Back 
                                </button>&nbsp;&nbsp;
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/panel/PanelDashboard" } >
                                    Search Marks 
                                </button>
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
                                                <button type="button"  class="btn btn-outline-secondary btn-sm" onClick={()=>addMarks(DeadLine._id,DeadLine.title,DeadLine.submissionType)}>Add Marks</button>&nbsp;&nbsp;
                                               
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

export default PresentationEvolution;
