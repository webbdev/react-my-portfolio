import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Spinner from './../layout/Spinner'
import './../Home.scss'

export default class Home extends Component {
    state = { 
        projects: [],
        loading: false
    };

    async componentDidMount() {
        this.setState({ loading: true }) 
        const res = axios
        .get(`https://raw.githubusercontent.com/webbdev/react-my-portfolio/master/src/utils/data.json`)

        this.setState({ projects: (await res).data, loading: false })
    }
    
    render() {
        const { loading } = this.state;

        if (loading) {
            return <Spinner />
        } else {

            return (
                <div className="App">
                    <section id="projects-container">
                        <p className="projects-title">Front End Developer Portfolio</p>
                        <div className="grid-container">
                        {
                            this.state.projects.map((project) =>
                                <div key={project.id} className={`grid-item ${project.style}`}>

                                    <Link to={{ pathname: `/${project.id}`, state: { project }  }} >
                                        <div className="img-container">
                                            <img src={project.prImgMini} className="item-img" alt={project.prImgAlt} />
                                            <div className="img-middle-overlay"></div>
                                        </div>
                                    </Link>
                                    
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