import React from 'react';
import './style.css';
import profPic from './img/work.profile_pic.jpeg'


class AboutMe extends React.Component {
    render() {
        return (
            <div>

                <div className="col-md-12">
                    <img src={profPic} alt={"portPhoto"} className="portImage float-left" />
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
                    <div className="languages col-md-2 row container-fluid text-center">
                        <h2 className="skillsLangTitle">Languages</h2>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>jQuery</li>
                            <li>Node.Js</li>
                            <li>Express.Js</li>
                            <li>NoSQL</li>
                            <li>Sequelize</li>
                            <li>Mongoose</li>
                            <li>APIs</li>
                            <li>Object-Oriented-programming (OOli)</li>
                            <li>Object_Relational Mapping (ORM)</li>
                            <li>Model-View-Controller (MVC)</li>
                            <li>React.Js</li>
                        </ul>
                    </div>
                    <div className="tools col-md-2 row">
                        <h2 className="skillsTools">Tools</h2>
                        <ul>
                            <li>MySQL</li>
                            <li>Insomnia</li>
                            <li>MongoDb</li>
                            <li>JawsDB</li>
                            <li>Robo3T</li>
                            <li>Heroku</li>
                            <li>Gitbash</li>
                            <li>Github</li>
                            <li>Websockets</li>
                            <li>Socket.io</li>
                            <li>Vanilla CSS</li>
                            <li>Vs Code</li>

                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;