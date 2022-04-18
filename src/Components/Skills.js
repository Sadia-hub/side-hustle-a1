import React from "react";

function Skills() {
  return (
    <>
      <div className="skill" style={{marginTop:"85px"}}>
        <h2>Skills</h2>
        <hr style={{width: '68%'}} />
        <ul className="list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>BootStrap</li>
          <li>AntD</li>
          <li>Reactjs</li>
          <li>React Native</li>
          <li>Nodejs</li>
          <li>MySQL</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div className="skill mt-5">
        <h2>INTERESTS</h2>
        <hr style={{width: '68%'}} />
        <ul className="list">
          <li>Web development</li>
          <li>Reading Fiction</li>
          <li>Drawing</li>
          <li>Writing</li>
          <li>Day dreaming</li>
          <li>Listening to Music</li>
        </ul>
      </div>
    </>
  );
}

export default Skills;
