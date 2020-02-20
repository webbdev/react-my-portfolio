import React, { Component } from 'react'
import HeaderMob from './HeaderMob'
import "./Header.scss"

export default class Header extends Component {
    render() {
        return (
            <header className="app-header">
                <div className="for-desktop-header">
                    <h1>Tanya T</h1>
                </div>
                <div className="for-mobile-header">
                    <HeaderMob />
                </div>
            </header>
        )
    }
}
