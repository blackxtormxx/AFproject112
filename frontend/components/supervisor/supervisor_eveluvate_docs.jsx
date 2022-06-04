import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/afterLogin';
import Footer from '../footer/footer';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import axios from 'axios';
import '../src/style.css';

function Supervisor_eveluvate_doc() {
 
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

    function viewSubmittedDocs(groupId){
        window.location.href = "/Supervisor/SupervisorViewDocs?id="+groupId;    
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
                                  Eveluvate Documents
                            </h2>
                            <div className="text-end mt-5">
                                <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/admin/SupervisorDashboard" } >
                                    Back 
                                </button>
                            </div>
                        </center>
                    </div>
                    <div class="row">
                    {AllTeams.map((team) => (
                        <div class="col-sm-4">
                            <div class="card text-start">
                            <div class="card-body">
                                <h5 class="card-title text-center mt-4">{team.groupId}</h5>
                                <p class="ps-5">{team.mem_one_regNum}</p>
                                <p class="ps-5">{team.mem_two_regNum}</p>
                                <p class="ps-5">{team.mem_three_name}</p>
                                <p class="ps-5">{team.mem_four_name}</p>
                                <p class="ps-5">{team.researchCategory}</p>
                                <p class="ps-5">{team.researchTopic}</p>
                                <div class="text-end">
                                    <a href="#" class="btn btn-primary " onClick={()=> viewSubmittedDocs(team.groupId)}>Documents Evaluate</a>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                    ))}
                    </div>     
                </div>
            </center>
      </div>
    </div>
  );
}

export default Supervisor_eveluvate_doc;
