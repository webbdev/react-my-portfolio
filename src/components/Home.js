import React, { Component } from 'react'
import axios from 'axios'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Row, Col } from 'react-bootstrap'
import Spinner from './layout/Spinner'
import './Home.scss'

export default class Home extends Component {

    state = { 
        projects: [],
        isModalVisible: {},
        loading: false
    };

    async componentDidMount() {
        this.setState({ loading: true }) 
        const res = axios
            .get(`https://raw.githubusercontent.com/webbdev/react-my-portfolio/master/src/utils/data.json`)

            this.setState({ projects: (await res).data, loading: false })
    }

    showModal(id) {
        
        this.setState({
            isModalVisible: {     
                ...this.state.isModalVisible,
                [id]: true
            }
        })
    }

    onCloseModal = (event) => {
        event.preventDefault()
		this.setState({ 
            isModalVisible: {     
                isModalVisible:false
            }
        })
    }
    
    render() {
        const { isModalVisible, loading } = this.state;

        if (loading) {
            return <Spinner />;
        } else {

            return (
                <div className="App">
                    <section id="projects-container">
                        <p className="projects-title">Front End Developer Portfolio</p>
                        <div className="grid-container">
                        {
                            this.state.projects.map((project) =>
                                <div key={project.id} className={`grid-item ${project.style}`}>

                                    <div className="img-container" onClick={() => this.showModal(project.id)}>
                                        <img src={project.prImgMini} className="item-img" alt={project.prImgAlt} />
                                        <div className="img-middle-overlay">
                                            {/* <span className="search-icon">
                                                <FontAwesomeIcon icon="search" />
                                            </span> */}
                                        </div>
                                    </div>
                                    
                                    { isModalVisible[project.id] &&
                                        <div className="modal-box" onClick={this.onCloseModal}>
                                            <div className="modal-content">
                                                <div className="inside-wrapper">
                                                    <Row style={{
                                                        textAlign: "left"
                                                    }}>
                                                        <Col sm={7} xs={12}>
                                                            <div className="project-images-box">
                                                                {project.prImgUrl.map((imgUrl, index) => (
                                                                    <img src={imgUrl} alt={project.prImgAlt} key={index} className="project-img" />
                                                                ))}  
                                                            </div>
                                                        </Col>
                                                        <Col sm={5} xs={12}>
                                                            <div className="project-info-box">
                                                                <h2 className="pr-title">{project.prTitle}</h2>
                                                                <p className="pr-subtitle">{project.prSubtitle}</p>
                                                                <p className="pr-description">{project.prDescription1}</p>
                                                                <p className="pr-description">{project.prDescription2}</p>
                                                                <div className="tech-stack">
                                                                    <span className="pr-skills-title">Skills:</span>
                                                                    {project.prTechStack.map((techStack, index) =>
                                                                        <span key={index} className="pr-skills">{techStack}</span>
                                                                    )}
                                                                </div>
                                                                <div className="project-links">
                                                                    <a href={project.prUrl} target="_blank" tabIndex="1" rel="noopener noreferrer">View Project</a>
                                                                    <a href={project.prGithubUrl} target="_blank" tabIndex="1" rel="noopener noreferrer">View Github</a>
                                                                </div>
                                                                <a onClick={this.onCloseModal} className="back-btn" tabIndex="1">
                                                                    Back
                                                                </a>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            )
                        }
                        </div>
                    </section>
                </div>
            )

        }
    }
}
