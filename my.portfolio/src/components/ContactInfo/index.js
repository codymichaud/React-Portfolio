import React from 'react';
import '../style.css';
import './glowButton.css';
import profPic from './img/work.profile_pic.jpeg';
import favicon from './img/favicon.ico';
import linkedin from './img/Linkedin.svg';
import github from './img/github.svg';
import instagram from './img/instagram.svg';
import facebook from './img/facebook.svg';

class ContactInfo extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <img src={profPic} alt={"portPhoto"} className="portImage" />
                </div>
                <div className="contactInformation col-12 align-content-center">
                    <h5 className="contactInfo container-fluid">How to contact me</h5>
                    <p className="email container-fluid" id="font3"> Email: cody.r.michaud@gmail.com</p>
                    <p className="upWork container-fluid" id="font3">Reach me on <a href="https://www.upwork.com/freelancers/~014a06d8859dfbd50e" className="upWorkLink">Upwork</a>.</p>
                    <p className="phoneNumb container-fluid">Work: 425-281-4403</p>
                    <p className="container-fluid text-center githubName" id="font3">Head to
            my <a href="https://github.com/codymichaud" rel='noreferrer' target="_blank" className="githubHref">Github page</a> to see all my
            repos and projects.</p>
                    <br />
                    <h4 className="resHead container-fluid mx-auto text-center"><a href="./assets/Cody Resume (3).pdf" target="_blank" className="resPdf resGradient">Resume</a>
                    </h4></div>
                <br />
                <div className="glowBtns">
                    <ul>
                        <li><a href="www.facebook.com" rel='noreferrer' target="_blank"><img src={facebook} className="fab fa-facebook-f" alt='Facebook' /></a></li>
                        <li><a href="https://github.com/codymichaud" rel='noreferrer' target="_blank"><img src={github} className="fab fa-github" alt='Github' /></a></li>
                        <li><a href="https://www.linkedin.com/in/cody-michaud/" rel='noreferrer' target="_blank"><img src={linkedin} alt='LinkedIn' className='fab fa-github' /></a></li>
                        <li><a href="www.instagram.com" rel='noreferrer' target="_blank"><img src={instagram} className="fab fa-instagram" alt='Instagram' /></a></li>
                        <li><a href="https://www.openxeducation.com" rel='noreferrer' target="_blank"><img src="./assets/imgs/favicon.ico" alt="openX" className="fab fa-openx" /></a></li>
                        <li><a href="https://www.upwork.com/freelancers/~014a06d8859dfbd50e" rel='noreferrer' target="_blank"><img src={favicon} alt="Upwork" className="fab fa-upwork" /></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default ContactInfo;