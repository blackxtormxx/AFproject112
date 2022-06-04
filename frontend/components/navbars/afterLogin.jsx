import React ,{useState , useEffect} from "react";
import Swal from 'sweetalert2';

function logout(){
  Swal.fire({
    title: "Logout!",
    text: "Do you want to log out?",
    icon: 'warning',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
    customClass: {
      actions: 'my-actions',
      cancelButton: 'order-1 right-gap',
      confirmButton: 'order-2',
      denyButton: 'order-3',
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({  
        title: "Success!",
        text: "Logout Success!",
        icon: 'success',
        confirmButtonText: "OK",
        type: "success"}).then(okay => {
        if (okay) {
            window.location.href = "/Login";
        }
      });
    } else if (result.isDenied) {
      Swal.fire('Logout Canceled', '', 'info')
    }
  })

}


function AfterLogin() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand h1 fw-bold" style={{fontSize:'30px'}} href="/"><span className="text-warning text-uppercase">RP</span>Manager</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <form class="d-flex">
                <button class="btn btn-warning " type="button" onClick={logout} >Logout <i class="bi bi-box-arrow-in-right"></i></button>&nbsp;&nbsp;
            </form>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default AfterLogin;
