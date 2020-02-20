import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./Contact.scss"

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    handleChange = (e) => {
        this.setState({
			[e.target.name]: e.target.value
		})
    }

    handleReset = (e) => {
        this.setState({ 
            name: '',
            email: '',
            subject: '',
            message: ''
        })
    };

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
        .then(() => alert("Success!"))
        .catch(error => alert(error));
  
        e.preventDefault();
    };
  
    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div id="contact-container">
                <div className="pr-row">
                    <div className="cont-col">
                        <h2>Contact</h2>
                        <div className="social-links">
                            <a href="mailto:forrwebdev@gmail.com" className="mail">forrwebdev@gmail.com</a>
                            <a href="https://linkedin.com/" className="linkedin" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                            <a href="https://github.com/webbdev" className="github" target="_blank">
                                <FontAwesomeIcon icon={['fab', 'github']} />
                            </a>
                        </div>
                    </div>
                    <div className="cont-col">
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <input 
                                    type="text"
                                    name="name"
                                    className="input-style"
                                    placeholder="Name *"
                                    value={name}
                                    onChange={this.handleChange}
                                    required
                                />
                                
                                <input 
                                    type="text"
                                    name="email"
                                    className="input-style" 
                                    placeholder="Email *" 
                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                    value={email}
                                    onChange={this.handleChange}
                                    required 
                                />
                                
                                <input 
                                    type="text"
                                    name="subject"
                                    className="input-style" 
                                    placeholder="Subject"
                                    value={subject}
                                    onChange={this.handleChange} 
                                />
                           
                                <textarea 
                                    type="text"
                                    name="message"
                                    className="input-style" 
                                    placeholder="Message *"
                                    value={message}
                                    onChange={this.handleChange} 
                                    required
                                />
                            </div>
                            <div className="send-btn-box">
                                <input 
                                    type="reset" 
                                    value="Clear" 
                                    className="btn btn-reset"
                                    onClick={this.handleReset}
                                />
                                <input type="submit" value="Send" className="btn" />
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        )
    }
}
