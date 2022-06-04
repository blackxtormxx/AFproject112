
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Navbar from  '../navbars/afterLogin';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';




function Staff_one_markingSchema() {
  
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');


    const [OneDeadline,setOneDeadline] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/deadLine/oneDeadLine/"+id)
        .then(res => setOneDeadline(res.data))
        .catch(error => console.log(error));
    },[]);

    function Download(){
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
                pdf.save("Deadline Report - "+id+".pdf");  
              });  
          }
    return (
    <div  >
        <Navbar/>
        
        <div class="dashboard-wrapper " id="pdfdiv">
            <div class="row">
                <div class="col"></div>
                <div class="col">
                <div  style={{paddingTop:'13%',paddingLeft:'2%'}}>
                
                {OneDeadline.map((Deadline,key) => (
                
                    <div id="tableId" className="container-fluid bg-white" style={{paddingLeft:'5%', paddingTop:'2%' ,paddingBottom:'2%', paddingRight:'5%'}} >
                     <center>
                          <h2 className="text-uppercase text-black">{Deadline.title}</h2>
                          <h5 style={{fontSize:'15px' , lineHeight:'0px'}} className="mt-2">Status - {Deadline.status}</h5>
                     </center>
                     <br/>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Deadline Date And Time- {Deadline.deadLineDateTime}</h5>
                     <h5 style={{fontSize:'15px'}} className="mt-1">Document Link. Click Me For Download</h5>
                     <div style={{fontSize:'15px'}} className="mt-5"
                        dangerouslySetInnerHTML={{
                            __html: Deadline.description
                        }}></div>
                     
                     
                    </div>
                ))}
                </div>
                    <div className="text-end " style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                        <button className='btn-sm btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/admin/AdminViewDeadLines" } >
                            Back 
                        </button>&nbsp;&nbsp;
                        <button className='btn-sm btn-dark' style={{ fontSize:'13px', fontWeight:'light'}}  onClick={Download}>
                            Download 
                        </button>{' '}&nbsp;&nbsp;
                    </div>
                    <br/>
                    <br/>
                    <br/>
                </div>
                <div class="col"></div>
            </div>
            </div>
        </div>
      )
};


export default Staff_one_markingSchema;