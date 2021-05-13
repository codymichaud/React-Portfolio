import React from 'react';
import './style.css';

var Navbar = React.createClass({
    render: function () {
        return (

            <nav className="navbar navbar-expand-lg navbar-custom">
                <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <p className="nameP">Cody Michaud</p>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a id="font2" className="nav-link" href="./index.html">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="navitem">
                            <a id="font2" className="nav-link" href="./projects.html">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a id="font2" className="nav-link" href="./port.contact.html">Contact Me!</a>
                        </li>
                    </ul>
                </div>
                <a href="https://github.com/codymichaud" rel='noreferrer' target="_blank"><img id="gitLogo" src="./assets/imgs/github.svg" alt="Github" /></a>
                <a href="https://www.linkedin.com/in/cody-michaud-b0588a1b1/" rel='noreferrer' target="_blank"><img src="./assets/imgs/Linkedin.svg" alt="Linked-In" id="linkedLogo" /></a>
                <a href="https://www.upwork.com/freelancers/~014a06d8859dfbd50e" rel='noreferrer' target="_blank"><img src="./assets/imgs/upWork.svg" alt="UpWork" id="upworkLogo" /></a>
            </nav>
        );
    }
});

export default Navbar;