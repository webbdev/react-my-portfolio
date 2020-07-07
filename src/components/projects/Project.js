import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Spinner from './../layout/Spinner'
import './../Project.scss'

class Project extends Component {

    state = {
        project: {},
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true }) 

        let projectId = this.props.match.params.id;

        const res = axios.get(`https://raw.githubusercontent.com/webbdev/react-my-portfolio/master/src/utils/data.json`)

        this.setState({ project: (await res).data.find(data => data.id === projectId), loading: false })
    }

    render() {
        const { loading } = this.state;
        const { prImgUrl, prImgAlt, prTitle, prSubtitle, prDescription1, prDescription2, prTechStack, prUrl, prGithubUrl } = this.state.project;
        
        return (  
            <div className="project-box">
                <div className="project-content">
                    <div className="inside-wrapper">
                        <Row style={{
                            textAlign: "left"
                        }}>
                            <Col sm={7} xs={12}>
                                {loading ? 
                                    <Spinner />
                                    :
                                    <div className="project-images-box">
                                        
                                        {prImgUrl && prImgUrl.map((imgUrl, index) => (
                                            <img src={imgUrl} alt={prImgAlt} key={index} className="project-img" />
                                        ))}
                                    </div>
                                }
                            </Col>
                            <Col sm={5} xs={12}>
                                <div className="project-info-box">
                                    <h2 className="pr-title">{prTitle}</h2>
                                    <p className="pr-subtitle">{prSubtitle}</p>
                                    <p className="pr-description">{prDescription1}</p>
                                    <p className="pr-description">{prDescription2}</p>
                                    <div className="tech-stack">
                                        <span className="pr-skills-title">Skills:</span>
                                        {prTechStack && prTechStack.map((techStack, index) =>
                                            <span key={index} className="pr-skills">{techStack}</span>
                                        )}
                                    </div>
                                    <div className="project-links">
                                        <a href={prUrl} target="_blank" tabIndex="1" rel="noopener noreferrer">View Project</a>
                                        <a href={prGithubUrl} target="_blank" tabIndex="1" rel="noopener noreferrer">View Github</a>
                                    </div> 
                                    
                                    <Link to="/" className="back-btn" tabIndex="1">Back</Link>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project