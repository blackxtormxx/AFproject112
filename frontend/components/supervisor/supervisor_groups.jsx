import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../src/style.css';

function StudentGroupManage() {
 
  const username = Cookies.get('user_name');
  const [AllTeams,setAllTeams] = useState([]);
  useEffect(() => {
      axios.get("http://localhost:5000/team/allTeamForYou/"+username)
      .then(res => setAllTeams(res.data))
      .catch(error => console.log(error));
  },[]);

  function updateTopic(id,topicStatus){
   
        const updateTopic ={id,topicStatus}
        axios.put("http://localhost:5000/team/updateTopic",updateTopic).then(() =>{
            Swal.fire({  
                title: "Success!",
                text: "Topic "+topicStatus,
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
                    if (okay) {
                        window.location.href = "/Supervisor/SupervisorGroup";
                }
            });

        }).catch((err)=>{

            Swal.fire({  
                title: "Error!",
                text: "Topic Not "+topicStatus,
                icon: 'error',
                confirmButtonText: "OK",
                type: "success"
            })
        })
    }

    function viewTopic(id){
        window.location.href = "/Supervisor/SupervisorViewTeam?id="+id;
        
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
                                   Group Management
                            </h2>
                            <div className="text-end mt-5">
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/admin/SupervisorDashboard" } >
                                    Back 
                                </button>
                            </div>
                        </center>
                    </div>
                            <table class="table">
                                <thead>
                                    <tr class="bg-dark text-white">
                                        <td >Group Id</td>
                                        <td >Member One</td>
                                        <td >Member Two</td>
                                        <td >Member Three</td>
                                        <td >Member Four</td>
                                        <td >Research Area</td>
                                        <td >Research Topic</td>
                                        <td  class="text-center">Action</td>
                                    </tr>
                                </thead>
                                <tbody>
                                {AllTeams.map((team) => (
                                   <tr class="bg-white text-dark">
                                      <td >{team.groupId}</td>
                                      <td >{team.mem_one_regNum}</td>
                                      <td >{team.mem_two_regNum}</td>
                                      <td >{team.mem_three_name}</td>
                                      <td >{team.mem_four_name}</td>
                                      <td >{team.researchCategory}</td>
                                      <td >{team.researchTopic}</td>
                                      <td  class="text-center">
                                            <button type="button" style={{display: ((team.topicStatus === 'Submitted') || (team.topicStatus === 'Re-Submitted'))?'inline':'none'}} class="btn btn-outline-success btn-sm" onClick={()=>updateTopic(team._id,'Accept')}>Accept</button>&nbsp;&nbsp;
                                            <button type="button" style={{display: ((team.topicStatus === 'Submitted') || (team.topicStatus === 'Re-Submitted'))?'inline':'none'}} class="btn btn-outline-danger btn-sm" onClick={()=>updateTopic(team._id,'Reject')}>Reject</button>&nbsp;&nbsp;
                                            <button type="button"  class="btn btn-outline-danger btn-sm" onClick={()=>viewTopic(team.groupId)}>View</button>&nbsp;&nbsp;
                                      </td>
                                  </tr>
                                ))}
                                </tbody>
                            </table>
                </div>
            </center>
      </div>
    </div>
  );
}

export default StudentGroupManage;
