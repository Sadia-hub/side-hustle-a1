import React from "react";
import Education from "./Education";
import Experience from './Experience';
import Skills from "./Skills"

function Generalinfo(){
    return(
        <>
            <div className="container mt-3 mb-5">
                <div className="row">
                    
                    <div className="col-md-4 offset-1" style={{backgroundColor:"#5D6D7E", color:"white", marginTop:"49px"}}>
                       <Skills />
                    </div>
                    <div className="col-md-6 mt-5" style={{backgroundColor:"#5D6D7E", color:"white"}}>
                        <h1>Sadia Bibi</h1>
                        <p>Email: sadiashah059@gmail.com</p>
                        <p>PhoneNo: (92) 3223217656</p>
                        <hr style={{width: '80%'}}/>
                        <Education/>
                        <hr style={{width: '80%'}}/>
                        <Experience />
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Generalinfo;