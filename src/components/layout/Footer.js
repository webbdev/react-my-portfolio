import React from 'react'
import { NavBarWithRouter } from './NavigationBar'
import "./Footer.scss"

export const Footer = () => {
    return (
        <footer>
            <div className="for-desktop">
                <NavBarWithRouter />
            </div>
            <div className="copyright">
                <p>2020 © TANYA T</p>
            </div>
        </footer>
    )
}
