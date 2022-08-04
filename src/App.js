import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Header from './components/Header';
import Stack from './components/Stack';
import Work from './components/Work';
import Libraries from './components/Libraries';
import LibrariesInfo from './components/LibrariesInfo';
import Contact from './components/Contact';
import content from './content';
import Image from 'react-bootstrap/Image'
import { Navbar } from 'react-bootstrap';
import { Link as ScrollLink } from 'react-scroll';
import { Helmet } from "react-helmet";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
/*
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        if (
            this.props.location.pathname !== prevProps.location.pathname
        ) {
            window.scrollTo(0, 0);
        }
        else {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return null;
    }
}
*/
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

 function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}


function App() {
    return (

        <Router>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Frame Blast Studios</title>
                <link rel="canonical" href="http://www.fbstudios.se/" />
            </Helmet>
            <Navbar sticky="top" className="navbar-dark text-white " sticky="top" style={{ fontFamily: 'Arial', background: content.color_purple.LightShade, }}>
                <Link className="col ms-3 py-2" to="/">
                    <Image className="" src={content.logo} alt="Logo" height='70' />
                </Link>
                <Link className="col-auto mx-5 fs-2 text-dark text-decoration-none" to={content.nav.links[0].to} >{content.nav.links[0].text}
                </Link>
                <Link className="col-auto me-5 fs-2 text-dark text-decoration-none" to={content.nav.links[1].to} >{content.nav.links[1].text}
                </Link>
            </Navbar>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/work">
                    <ScrollToTop />
                        <WorkFunc />
                </Route>
                <Route path="/contact">
                    <ContactFunc />
                </Route>
                <Route path="/">
                    <ScrollToTop />
                        <Home />
                    </Route>
                </Switch>
        </Router>
    );
}

function Home() {
    return (
        <Router>
            
            <div className="App" style={{ background: content.color_purple.DarkShadeLight }}>
                <Header />
                <div style={{
                    backgroundImage: `url(${content.assets.whiteWood})`, backgroundRepeat: 'repeat-y', backgroundPosition: "center", backgroundSize: 'contain'}}>
                <Stack />
                    <Libraries />
                    </div>
                <LibrariesInfo />
                <Contact />


            </div>
    </Router>
  );
}

function WorkFunc() {
    return (
        <Router>
            <div className="App" style={{ background: content.color_purple.DarkShadeLight }}>
                <Work />
                <Contact />

            </div>
        </Router>
    );
}

function ContactFunc() {
    return (
        <Router>
            <div style={{ background: content.color_purple.DarkShadeLight }}>
                <Contact />

            </div>
        </Router>
    );
}
export default App;
/* DEFAULT REACT APP CODE
                 <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <Button>Testbutton</Button>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                </a>
                </header>

                    {content.nav.links.map((link, index) => {
                    return <Link className="col p-5 text-light text-decoration-none" key={index} to={link.to}> {link.text}</Link>
                })}
 */