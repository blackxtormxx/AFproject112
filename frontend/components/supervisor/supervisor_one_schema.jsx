
import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Navbar from  '../navbars/afterLogin';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';




function supervisor_one_markingSchema() {
  
    const [backBtn, setBackBtn] = useState("inline");
    const [downloadBtn, setDownloadBtn] = useState("inline");

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');


    const [MarkingSchemaDetails,setOneMarkingSchema] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5000/markingSchemes/oneMarkingSchema/"+id)
        .then(res => setOneMarkingSchema(res.data))
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
                pdf.save("Marking Schema - "+id+".pdf");  
              });  
          }
    return (
    <div class="dashboard-main-wrapper" >
        <Navbar/>
        
        <div class="dashboard-wrapper " >
            <div class="row">
                <div class="col"></div>
                <div class="col">
                <div  style={{paddingTop:'13%',paddingLeft:'2%', width:'98%'}} >
                <div id="pdfdiv">
                {MarkingSchemaDetails.map((one_MarkingSchema,key) => (
                
                    <div id="tableId" className="container-fluid bg-white" style={{paddingLeft:'5%', paddingTop:'2%' ,paddingBottom:'2%', paddingRight:'5%'}} >
                     <center>
                          <h2 className="text-uppercase text-black">{one_MarkingSchema.title}</h2>
                          <h5 style={{fontSize:'15px' , lineHeight:'0px'}} className="mt-2">Status - {one_MarkingSchema.status}</h5>
                     </center>
                     <br/>
                     <div style={{fontSize:'15px'}} className="mt-5"
                        dangerouslySetInnerHTML={{
                            __html: one_MarkingSchema.markingSchema
                        }}></div>
                     
                     
                    </div>
                ))}
                </div>
                </div>
                    <div className="text-end " style={{paddingTop:'3%',paddingLeft:'2%', width:'98%'}}>
                        <button className='btn-sm btn btn-outline-dark' style={{ fontSize:'13px', fontWeight:'light'}} onClick={()=> window.location.href = "/Supervisor/SupervisorViewMarkingSchema" } >
                            Back 
                        </button>&nbsp;&nbsp;
                        <button className='btn-sm btn-dark' style={{ fontSize:'13px', fontWeight:'light', display : downloadBtn}}  onClick={Download}>
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


export default supervisor_one_markingSchema;