import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import axios from 'axios';

import '../src/style.css';

function TeamDashboard() {

    const [all_Staff,setAllStaff] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/staff/allStaff")
        .then(res => setAllStaff(res.data))
        .catch(error => console.log(error));
    });
  
    function updateStaff(id,status){
            
        const staffStatusUpdate ={
            id,
            status
        }

        axios.put("http://localhost:5000/staff/updateStaffStatus",staffStatusUpdate).then(() =>{
            Swal.fire({  
            title: "Success!",
            text: "Registration Request "+status,
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
                if (okay) {
                    axios.get("http://localhost:5000/staff/allStaff")
                    .then(res => setAllStaff(res.data))
                    .catch(error => console.log(error));
                }
            });

            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Registration Request Not "+status,
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }

    function deleteStaff(id){

        axios.delete("http://localhost:5000/staff/deleteStaffStatus/"+id).then(() =>{
            Swal.fire({  
            title: "Success!",
            text: "Staff Deleted ",
            icon: 'success',
            confirmButtonText: "OK",
            type: "success"}).then(okay => {
                if (okay) {
                    axios.get("http://localhost:5000/staff/allStaff")
                    .then(res => setAllStaff(res.data))
                    .catch(error => console.log(error));
                }
            });

            }).catch((err)=>{

                Swal.fire({  
                title: "Error!",
                text: "Staff Not Deleted",
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"})
            })
    }
    
    function viewStaff(id){
        window.location.href = '/admin/AdminViewOneStaff?id='+id;
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
                                   STAFF MANAGEMENT
                            </h2>
                            <div className="text-end mt-5">
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/admin/AdminDashboard" } >
                                    Back 
                                </button>
                            </div>
                            <div class="table-responsive mt-3">
                                <table class="table">
                                    <thead>
                                        <tr class="bg-dark text-white">
                                            <td>Name</td>
                                            <td>Telephone Number</td>
                                            <td>Email</td>
                                            <td>User Type</td>
                                            <td>Specialize</td>
                                            <td>Status</td>
                                            <td class="text-center">Action</td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {all_Staff.map((staff) => (
                                        <tr class="bg-white text-dark">
                                            <td>{staff.name}</td>
                                            <td>{staff.tel}</td>
                                            <td>{staff.email}</td>
                                            <td>{staff.userType}</td>
                                            <td>{staff.Specialize}</td>
                                            <td>{staff.status}</td>
                                            <td class="text-center">
                                                <button type="button"  class="btn btn-outline-danger btn-sm" onClick={()=> deleteStaff(staff._id)}>Delete</button>&nbsp;&nbsp;
                                                <button type="button"  class="btn btn-outline-secondary btn-sm" onClick={()=>viewStaff(staff._id)}>View</button>&nbsp;&nbsp;
                                                <button type="button" style={{display: ((staff.status === 'Deactivate') || (staff.status === 'Hold') || (staff.status === 'Reject'))?'inline':'none'}} class="btn btn-outline-success btn-sm" onClick={()=>updateStaff(staff.email,'Active')}>Active</button>&nbsp;&nbsp;
                                                <button type="button" style={{display: ((staff.status === 'Active'))?'inline':'none'}} class="btn btn-outline-warning btn-sm" onClick={()=>updateStaff(staff.email,'Deactivate')}>Deactivate</button>&nbsp;&nbsp;
                                                <button type="button" style={{display: ((staff.status === 'Hold'))?'inline':'none'}} class="btn btn-outline-warning btn-sm" onClick={()=>updateStaff(staff.email,'Reject')}>Reject</button>&nbsp;&nbsp;
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

export default TeamDashboard;
