import React, { Component } from 'react'
import "./About.scss"
import banner from "../utils/images/about/london1.jpg"
//import banner1 from "../utils/images/about/chrisgower.jpg"

export default class About extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            skillsLNG: [
                {type: "HTML5"},
                {type: "CSS3/SASS/LESS"},
                {type: "JavaScript"},
                {type: "Node.js"},
                {type: "Python"}
            ],
            skillsFrameworks: [
                {type: "React.js"},
                {type: "Redux"},
                {type: "jQuery"},
                {type: "Vue.js"},
                {type: "Angular.js"},
                {type: "Bootstrap"},
                {type: "Mustache.js"},
                {type: "GatsbyJS"}
            ],
            skillsOther: [
                {type: "Git/GitHub"},
                {type: "APIs"},
                {type: "JSON"},
                {type: "npm"},
                {type: "yarn"},
                {type: "WAI-ARIA"},
                {type: "Accessibility"},
                {type: "Shopify"},
                {type: "Jest"},
                {type: "Enzyme"},
                {type: "Visual Studio Code"},
                {type: "Photoshop"}
            ]
        };       
    }

    render() {
       
        const { skillsLNG, skillsFrameworks, skillsOther } = this.state;
        return (
            <div id="about-container">
                    
                    <div className="about-info-box">
                        <div className="about-col">
                            <img src={banner} alt="Banner" />
                            {/* <img src={banner1} alt="Banner1" /> */}
                        </div>
                        <div className="about-col">
                            <h2>About</h2>
                            <div className="aboutme">
                                <p>I'm a Front End Web Developer from Lithuania, but currently living in London, UK, and loving it.</p> 
                                <p>I enjoy creating and coding clean, responsive, user-friendly and functional websites, and web applications using the latest HTML5, CSS3, JavaScript, React, jQuery and other web technologies.</p>
                            </div>

                            <div className="skills-bar-box">
                                <h3>My Technical Skills</h3>
                                <div className="skills-bar-col">
                                    <h6>Languages:</h6>
                                    <div className="skills">
                                        {skillsLNG.map((skill, index) => 
                                            <div
                                                key={skill.type}
                                                style={{ width: `${skill.level}%`}}
                                            >
                                                <span>{skill.type}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="skills-bar-col">
                                    <h6>Frameworks/Libraries:</h6>
                                    <div className="skills">
                                        {skillsFrameworks.map((framework, index) => 
                                            <div
                                                key={framework.type}
                                                style={{ width: `${framework.level}%`, backgroundColor: ``}}
                                            >
                                                <span>{framework.type}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className="skills-bar-col">
                                    <h6>Other:</h6>
                                    <div className="skills">
                                        {skillsOther.map((other, index) => 
                                            <div
                                                key={other.type}
                                                style={{ width: `${other.level}%`, backgroundColor: ``}}
                                            >
                                                <span>{other.type}</span>
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
            </div>
        )
    }
}
