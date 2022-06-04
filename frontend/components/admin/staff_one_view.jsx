
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Navbar from  '../navbars/afterLogin';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';




function StaffView() {
  
    const [backBtn, setBackBtn] = useState("inline");
    const [downloadBtn, setDownloadBtn] = useState("inline");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');


    const [OneStaff, setOneStaff] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/staff/oneAllStaff/"+id)
        .then(res => setOneStaff(res.data))
        .catch(error => console.log(error));
    },[]);

    function Download(){
            setBackBtn('none');
            setDownloadBtn('none');
            const input = document.getElementById('pdfdiv');  
            html2canvas(input)  
              .then((canvas) => {  
                var imgWidth = 210;  
                var pageHeight = 290;  
                var imgHeight = canvas.height * imgWidth / canvas.width;  
                var heightLeft = imgHeight;  
                const imgData = canvas.toDataURL('image/png');  
                const pdf = new jsPDF('p', 'mm', 'a4')  
                var position = 0;  
                var heightLeft = imgHeight;  
                pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight );  
                pdf.save("Staff Profile - "+id+".pdf");  
              });  
              setBackBtn('inline');
              setDownloadBtn('inline');
          }
    return (
    <div class="dashboard-main-wrapper" >
        <Navbar/>
        
        <div class="dashboard-wrapper" id="pdfdiv">
            <div class="row">
                <div class="col"></div>
                <div class="col">
                <div  style={{paddingTop:'13%',paddingLeft:'2%', width:'98%'}}>
                
                {OneStaff.map((OneStaffDetail,key) => (
                
                    <div id="tableId" className="container-fluid bg-white" style={{paddingLeft:'5%', paddingTop:'2%' ,paddingBottom:'2%', paddingRight:'5%'}} >
                     <center>
                          <h2 className="text-uppercase text-black">{OneStaffDetail.name}</h2>
                     </center>
                     
                     <h5 style={{fontSize:'15px'}} className="mt-5">Staff Id - {OneStaffDetail._id}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Full Name - {OneStaffDetail.name}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Full Name - {OneStaffDetail.name}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Email - {OneStaffDetail.email}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Telephone Number - {OneStaffDetail.tel}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Fax Number - {OneStaffDetail.fax}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">User Type - {OneStaffDetail.userType}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Specialize - {OneStaffDetail.Specialize}</h5>
                     <div style={{fontSize:'15px'}} className="mt-3"
                        dangerouslySetInnerHTML={{
                            __html: OneStaffDetail.eductions
                        }}></div>
                     
                     
                    </div>
                ))}
                </div>
                <div className="text-end " style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                    <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/admin/AdminViewStaff" } >
                        Back 
                    </button>&nbsp;&nbsp;
                    <button className='btn-sm btn-dark' style={{ fontSize:'13px', fontWeight:'light', display : downloadBtn}}  onClick={Download}>
                        Download 
                    </button>{' '}&nbsp;&nbsp;
                    </div>
                </div>
                <div class="col"></div>
            </div>
            </div>
        </div>
      )
};


export default StaffView;