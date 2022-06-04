import React ,{useState , useEffect} from "react";
import HomePageNav from '../navbars/homePageNav';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import '../src/style.css';

function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function register(){
        window.location.href = "/student/Reg";
    }


    async function login(e){
        e.preventDefault();
        
        let item = {username , password};
        let result = await fetch("http://localhost:5000/user/login", {
          method: 'POST',
          headers:{
             "Content-Type" : "application/json",
             "Accept" : "application/json"
          },
          body:JSON.stringify(item)
       });
       result = await result.json();
       console.log(JSON.stringify(result.message));
       if( JSON.stringify(result.message) === '"Admin"'){
           Cookies.set('user_name',username, { expires: 70000, path: '' });
 
               Swal.fire({  
             title: "Success!",
             text: "Login Success",
             icon: 'success',
             confirmButtonText: "OK",
             type: "success"}).then(okay => {
                 if (okay) {
                     window.location.href = "/admin/AdminDashboard";
                 }
             });
        }else if( JSON.stringify(result.message) === '"Team"'){
            Cookies.set('user_name',username, { expires: 70000, path: '' });
 
             Swal.fire({  
                title: "Success!",
                text: "Login Success",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
               if (okay) {
                   window.location.href = "/student/TeamDashboard";
               }
           });
        }else if( JSON.stringify(result.message) === '"Supervisor"'){
           Cookies.set('user_name',username, { expires: 70000, path: '' });

            Swal.fire({  
                    title: "Success!",
                    text: "Login Success",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                if (okay) {
                    window.location.href = "/admin/SupervisorDashboard";
                }
            });
        }else if( JSON.stringify(result.message) === '"Co-Supervisor"'){
            Cookies.set('user_name',username, { expires: 70000, path: '' });

            Swal.fire({  
                title: "Success!",
                text: "Login Success",
                icon: 'success',
                confirmButtonText: "OK",
                type: "success"}).then(okay => {
            if (okay) {
                window.location.href = "/admin/SupervisorDashboard";
            }
        });
       }else if( JSON.stringify(result.message) === '"Panel Member"'){
                Cookies.set('user_name',username, { expires: 70000, path: '' });

                Swal.fire({  
                    title: "Success!",
                    text: "Login Success",
                    icon: 'success',
                    confirmButtonText: "OK",
                    type: "success"}).then(okay => {
                if (okay) {
                    window.location.href = "/panel/PanelDashboard";
                }
            });
        }
       else{
               Swal.fire({  
             title: "Error!",
             text: "Login Not Success",
             icon: 'error',
             confirmButtonText: "OK",
             type: "success"})
        }
     }

  return (
    <div >
       <HomePageNav/>
       <div class="global-container"  style={{paddingTop:'9%', paddingBottom:'1%'}}>
            <center>
                <div class="card login-form shadow border-0 ">
                    <div class="card-head bg-header rounded-top">
                        <h4 class="card-title text-center pt-5 pb-2  text-uppercase text-dark">
                                Login Page
                        </h4>
                    </div>
                    <div class="card-body" >
                    <div class="card-text">
                        <form action="#" method="post" >
                        <div class="mb-3 ">
                            <h6 className="fw-normal text-black-50 text-start">User Name :</h6>
                            <input class="form-control" type="text"  onChange={(e) =>{
                                    setUserName(e.target.value);
                                }}/>
                        </div> 
                        <div class="mb-3 ">
                            <h6 className="fw-normal text-black-50 text-start">Password :</h6>
                            <input class="form-control" type="password"  onChange={(e) =>{
                                    setPassword(e.target.value);
                                }}/>
                        </div> 
                        
                        <div class="mt-3 mb-2">
                            <div class="d-grid gap-2">
                                    <button onClick={login} class="btn text-white  d-letter-spacing shadow-0 fw-light" style={{ backgroundColor: '#1E1E1E'}} ><span className="h6">Login</span></button> 
                                    <p style={{cursor:'pointer'}} onClick={register}>Do you want to register?</p>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </center>
        </div>
    </div>
  );
}

export default Login;
