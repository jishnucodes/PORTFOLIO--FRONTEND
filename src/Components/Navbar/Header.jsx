import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
import { Link } from 'react-scroll'

import './navbar.css'

const Header = () => {
    return (
        <header>
            <Navbar expand="lg" className="bg-body-dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKIAAAAxCAYAAABZAHL2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozZjJmZWUyNi0zZDcxLTdjNDYtYTVkZi1lMDU3OWNlMGI3N2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkVGQjNCMDAzOUYxMTFFQTlFNTVGNkM3NzBBQjJFODQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkVGQjNBRkYzOUYxMTFFQTlFNTVGNkM3NzBBQjJFODQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6ZmVhM2NhMDctNDdjZS05ODQ3LWFlYzgtMDc0NDYwMTRkMzcxIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MzFjYWE1NGEtOTNjYi02ODRiLTlkZTUt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" alt="portFolio-logo" className='navbar-brand' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto justify-content-center align-items-center" >

                            <Link to='/' className='me-4 mb-2' >Home</Link>

                            <Link to='/' className='me-4 mb-2' >About</Link>

                            <Link to='/' className='me-4 mb-2' >Project</Link>

                        </Nav>
                        <Nav className='ms-auto justify-content-center align-items-center'>
                            <Link to='/'>
                                <button className='navbtn'>
                                    <span className="sms-icon">
                                        <span className="material-symbols-outlined">
                                            sms
                                        </span>
                                    </span>
                                    Connect Me
                                </button>
                            </Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
