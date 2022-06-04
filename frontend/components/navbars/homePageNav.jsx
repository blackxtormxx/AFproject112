import React ,{useState , useEffect} from "react";

function Login(){
  window.location.href = "/Login";
}

function Registration(){
  window.location.href = "/RegDashboard";
}


function HomeNavBar() {
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
                <button class="btn btn-warning " type="button" onClick={Login} >Login. <i class="bi bi-box-arrow-in-right"></i></button>&nbsp;&nbsp;
                <button class="btn btn-outline-warning " type="button" onClick={Registration}>Registration <i class="bi bi-save2"></i></button>&nbsp;&nbsp;
            </form>
            </div>
        </div>
        </nav>
    </div>
  );
}

export default HomeNavBar;
