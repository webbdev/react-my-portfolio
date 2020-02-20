import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { NavBarWithRouter } from "./NavigationBar"
// import "./HeaderMob.scss"

export default class HeaderMob extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMenu: true,
            isActive: false,
            btnVisible: true,
        }
        this.openBtnMenu = this.openBtnMenu.bind(this);
        this.closeBtnMenu = this.closeBtnMenu.bind(this);
    }

    openBtnMenu = (event) => {
        event.preventDefault()
        this.setState({
            showMenu: !this.state.showMenu,
            btnVisible: !this.state.btnVisible
        })
    }

    closeBtnMenu = (event) => {
        event.preventDefault()
        this.setState({
            showMenu: !this.state.showMenu,
            btnVisible: !this.state.btnVisible
        })
    }

    render() {
        const { showMenu } = this.state;

        let btn_id = this.state.btnVisible ? "visibleButton" : "hiddenButton";

        return (
            <div className="mynavbar">
                <nav>
                    <div>
                        <Link to="/" className="mynavbar-brand">Tanya T</Link>
                    </div>
                    <div>
                        <span id={btn_id} className="openbtn" onClick={this.openBtnMenu}>&#9776;</span>
                    </div>
                    
                </nav>
                <div id="myNav" className={showMenu ? "overlay" : "overlay showMenu"}>
                    <span className="closebtn" onClick={this.closeBtnMenu}>&times;</span>
                    <div className="overlay-content">
                        <NavBarWithRouter />
                    </div>
                </div>
            </div>
        )
    }
}

