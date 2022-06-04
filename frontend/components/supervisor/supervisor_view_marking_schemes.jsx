import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import axios from 'axios';
import '../src/style.css';

function ViewMarkingschemes() {

    const [all_MarkingSchema,setAllMarkingSchema] = useState([]);
   

    useEffect(() => {
        axios.get("http://localhost:5000/markingSchemes/AllMarkingSchema")
        .then(res => setAllMarkingSchema(res.data))
        .catch(error => console.log(error));
    });
  
    function Download(id){
        
        window.location.href = "/Supervisor/SupervisorViewOneMarkingSchema?id="+id;
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
                                   DOWNLOAD MARKING SCHEMES
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
                                            <td  style={{width: '80%'}}>Title</td>
                                            <td  style={{width: '20%'}} class="text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {all_MarkingSchema.map((MarkingSchema) => (
                                        <tr class="bg-white text-dark">
                                            <td>{MarkingSchema.title}</td>
                                            <td class="text-center">
                                                <button type="button"  class="btn btn-outline-danger btn-sm" onClick={()=> Download(MarkingSchema._id)}>Download</button>&nbsp;&nbsp;
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
