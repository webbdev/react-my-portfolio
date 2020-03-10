import React from 'react'
import { Nav } from "react-bootstrap"
import { withRouter } from "react-router"
import "./NavigationBar.scss"

const NavigationBar = (props) => {
    const { location } = props
    return (
        <Nav as="ul" activeKey={location.pathname}>
            <Nav.Item as="li">
                <Nav.Link href="/">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/about">About</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
                <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

export const NavBarWithRouter = withRouter(NavigationBar);

