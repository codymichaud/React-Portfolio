import React from 'react';
import './style.css';

class Navbar extends React.Component {
    render() {
        return <div>
            <nav className="navbar navbar-expand-lg navbar-custom">
                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <p className="nameP">Cody Michaud</p>

                <a href="https://github.com/codymichaud" rel='noreferrer' target="_blank"><img id="gitLogo" src="./assets/imgs/github.svg" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/cody-michaud-b0588a1b1/" rel='noreferrer' target="_blank"><img src="./assets/imgs/Linkedin.svg" alt="Linked-In" id="linkedLogo" /></a>
                <a href="https://www.upwork.com/freelancers/~014a06d8859dfbd50e" rel='noreferrer' target="_blank"><img src="./assets/imgs/upWork.svg" alt="UpWork" id="upworkLogo" /></a>
            </nav>
        </div>
    }
}

export default Navbar;