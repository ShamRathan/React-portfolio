import React from 'react';
import './style.css';
import mypic from './shampic.png';
import pic1 from  './li.png';
import pic2 from './git.png';
import pic3 from './ig.png';
import pic4 from './yt.png';
import pic5 from './bg2.jpg';

const Reactport=()=>{
    return (
        <div class="hero">
        <nav>
          <ul>
              <li><b><a href="index.html">Home</a></b></li>
              <li><b><a href="about.html">About</a></b></li>
              <li><b><a href="contact.html">Contact</a></b></li>
          </ul>
          <a href="Resume.pdf" class="btn">Resume</a>
        </nav>
        <div class="sham">
        <img src={mypic} ></img></div>
        <div class="content">
          <span class="title"><b>Web Developer</b></span>
          <h1>Hello, I am <span>S.Sham Rathan</span></h1>
          
          <p><b>
            I am working on a professional, visually sophisticated and
            technologically proficient, responsive and multi-functional React
            Components.
          </b>
          </p>
          <a href="Resume.pdf" class="btn">Download CV</a>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
            <div class="content2">
              <div class="power">
                
            <h3><b>Skills:</b></h3>
              <li >C programming language</li>
              <li >Type writing</li>      
              <li >Communication</li>
              <br/>

          <h3><b>Field of Intrest:</b></h3>
          <li >Computer Hardware</li>
          <li >Software</li> 
          <br/>

          <h3><b>Academic Details:</b></h3>
          <ul>
              <li>Saveetha Engineering College
                  Artificial Intelligence and Data Science , 8.3,
                  Pursuing</li>
              <li>Vaigai Matric Hr.Sec School
                  HSC, 88.9%, 2021</li>
              <li>Vaigai Matric hr.sec School
                  SSLC, 86.6%, 2019</li>
          </ul>
          
          <br/>
          <hr/>
          <div class="right">
            
          <h3><b>Curricular Activities:</b></h3>
          <ul>
          <li>Bharathidhasan university certification course:</li>
          <li>Basic Computing Concepts</li>
          <li>Computer Operating system</li>
          <li>Advanced web designing</li>
          <br/>

          <h3><b>Extra-Curricular:</b></h3>
          <li>Scouts -Trithiyasopan</li>
          <li>Silambam at state level</li></ul>
          <br/>

          <h3><b>Strength:</b></h3>
          <ul>
              <li>Hard working</li>
              <li>Ability to work in a team</li>
              <li>Effective time management</li>
          </ul>
          <br/>

          <h3>Hobbies:</h3>
          <ul>
              <li>Basketball</li>
              <li>Yoga</li>
              <li>Reading books</li>
          </ul>
          
          <br/>
          </div>
          <hr/>
    <h3>Contact:</h3>
          <p><b>Mail id:</b>shamrathan18@gamil.com</p>
        <p><b>Phone:</b> 9940890784</p>
        <p><b>Address:</b> 14,Near Saraswathi school,
          Valapady,Salem-636115.
        </p>
        </div>
    <div class="Social">
        <img src={pic1}/>
        <img src={pic2}/>
        <img src={pic3}/>
        <img src={pic4}/>
        </div>
        </div>
        
        </div>
        </div>
    
  
      
    )

}
export default Reactport;

