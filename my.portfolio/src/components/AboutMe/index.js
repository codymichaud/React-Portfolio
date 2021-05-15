import React from 'react';
import './style.css';

class AboutMe extends React.Component {
    render() {
        return (
            <div>
                <div className="col-md-12">
                    <img src={require('./img/work.profile_pic.jpeg')} alt={"portPhoto"} className="portImage float-left" />
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <article className="aboutMe font3">I am currently enrolled in the University of Washington Coding Boot Camp program,
                and
                will
                be finished in June of 2021. Coding has always been an interest of mine, and I recently decided to go back to
                school to pursue
                web
                development. I'm very excited to start this program, network with other web developers, and pave my way for the
                future I
                want in web development. I hope to provide
                my
                knowledge and expertise to be able to project their business forward and assist in any way I can. My attention
                to detail
                and willingness to put in my all at all times is something I strongly feel can benefit any company. Although I
                am just
                starting out in my development career, I believe that my work will show the drive and passion I have for
                web development. Thank you for your time. If you have any questions,
          head over to my <a href="./port.contact.html">contact</a> page.</article>
                <div className="skills col-md-12 mx-auto text-center container-fluid row">
                    <div className="languages col-md-2">
                        <h2 className="skillsLangTitle">Languages</h2>
                        <ul>
                            <p>HTML5</p>
                            <p>CSS3</p>
                            <p>JavaScript</p>
                            <p>jQuery</p>
                            <p>Node.Js</p>
                            <p>Express.Js</p>
                            <p>NoSQL</p>
                            <p>Sequelize</p>
                            <p>Mongoose</p>
                            <p>APIs</p>
                            <p>Object-Oriented-Programming (OOP)</p>
                            <p>Object_Relational Mapping (ORM)</p>
                            <p>Model-View-Controller (MVC)</p>
                            <p>React.Js</p>
                        </ul>
                    </div>
                    <div className="tools col-md-2">
                        <h2 className="skillsTools">Tools</h2>
                        <ul>
                            <p>MySQL</p>
                            <p>Insomnia</p>
                            <p>MongoDb</p>
                            <p>JawsDB</p>
                            <p>Robo3T</p>
                            <p>Heroku</p>
                            <p>Gitbash</p>
                            <p>Github</p>
                            <p>Websockets</p>
                            <p>Socket.io</p>
                            <p>Vanilla CSS</p>
                            <p>Vs Code</p>
                            <p />
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;