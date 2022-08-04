import React from 'react';
import Image from 'react-bootstrap/Image'
import content from '../content';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
export default function Navigation() {
    return (
        <Navbar className="row navbar-dark text-white d-flex p-2" sticky="top" style={{ fontFamily: 'Arial', background: content.color_purple.DarkShade, }}>
            
            <Image className="col-auto mx-5 my-2" src={content.logo} alt="Logo" height='70' />
                <div className="" ></div>
                <div className="col-2" >{content.nav.links.map((link, index) => {
                    return <div className="col-2 p-5" key={ index}>{link.text}</div>
                })}
                </div>
            </Navbar>
        )
}
/*
     return (
        <Navbar className="navbar-dark text-white d-flex p-2" style={{ background: content.color.BrandColor, }}>
                <h1>{content.nav.logo}</h1>
                <span className="tutorial_navigationdot rounded-circle mt-4 ms-2"  ></span>
                <div className="flex-grow-1 " ></div>
                <div className="fs-2" >{content.nav.links.map((link, index) => {
                    return <span className="p-5" key={ index}>{link.text}</span>
                })}
                </div>
            </Navbar>
        )
 
 
 
 */