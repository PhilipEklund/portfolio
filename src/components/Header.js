import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import content from '../content';
import Typical from 'react-typical';
import Button from 'react-bootstrap/Button';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import '../index.css'

class Header extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isHovering: false,
        };

        // Binding method

        this.onMouseHover = this.onMouseHover.bind(this);

    }
    onMouseHover(isTrue)
    {
        if (this.state.isHovering !== isTrue) {
            this.setState({

            isHovering: !this.state.isHovering,
        });
        }

        
    }
    render() {
        return (
            <div className="min-vh-100" id="header" style={{ fontFamily: 'Arial', backgroundImage: `url(${content.header.bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
                <Container style={{backgroundColor: 'rgb(29,29,30,0.7)',}} >
                    <div className="row d-flex justify-content-between justify-between flex-row-reverse min-vh-100">
                    <div className="col col-auto  mt-5">
                            <div className=" pt-1 shadow-lg" style={{
                                width: 420, height: 620, transform: 'rotate(-10deg)',
                            background: 'radial-gradient(circle, ' + content.color_purple.LightShade +' 50%, rgba(224, 212, 188, 1) 100%)',
                        }} >
                            <LazyLoadImage  src={content.header.pinImg} height={content.header.pinImg.height} placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                            <br/>
                            <LazyLoadImage src={content.header.profilImg} height={content.header.profilImg.height} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                                <div className="py-5">
                                    <h1 className=" p-2 text-dark-50 font-Limited " style={{ fontFamily:'Limited',}}>{content.header.text[2]}
                                {' '}
                                <Typical
                                    steps={content.header.typical}
                                    loop={Infinity}
                                    className="inline-block"
                                />
                            </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 p-2 mt-5 text-white font-weight-bold ">
                        <motion.div className="my-5 p-5" initial={{opacity: 0, y:60,}}animate={{ y: 0, opacity: 1, }} transition={{duration:1}}>
                                <h2 >{content.header.text[0]} <br /><br /> {content.header.text[1]}
                            </h2>
                            <div className="col col-md-6 d-flex d-inline-flex p-2 justify-content-center">
                                <motion.div animate={{ y: (this.state.isHovering ? 0 : 20), x: (this.state.isHovering ? 0 : 0), scale: (this.state.isHovering ? 1.4 : 1) }} transition={{ repeat: (this.state.isHovering ? 0 : Infinity), duration: (this.state.isHovering ? 0 : 2), repeatType: "reverse", }} onHoverStart={e => { this.onMouseHover() }} onHoverEnd={e => { this.onMouseHover() }} className="d-flex d-inline-flex p-2 justify-content-center">
                                    <ScrollLink to="contact" smooth={true}>
                                        <Button className="btn btn-secondary text-uppercase btn-lg text-white " type="button">{content.header.btnText}</Button>
                                    </ScrollLink>
                                </motion.div>
                            </div>
                        </motion.div>
                        </div>

                        <motion.div animate={{ opacity: 0.1, }} transition={{ repeat: Infinity, duration: 4,  repeatType: "reverse",}} ><h1 className="display1 text-light"> Scroll to explore <br /> | <br /> V</h1>
                        </motion.div>


                </div>

            </Container>
                </div>

        );
    }
}
export default Header;



/*     
 *     
 *     
 *                     <div className="embed-responsive embed-responsive-16by9 mt-5">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen frameBorder='0' allow='autoplay' style={{width:920, height:500}}></iframe>
                    
                </div>
 *     
 *     
 *     
 *     
 *     
 *     <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM?autoplay=1&mute=1" allowfullscreen frameBorder='0' allow='autoplay' style={{width:920, height:500}}></iframe>
 *   <div className="row d-flex justify-content-between justify-between flex-row-reverse" style={{ background: '#d8250f', backgroundImage: `url(${content.header.img})`, }}> //BAKGRUNDSBILD
 * 
class Header extends Component {

    constructor(props) {

        super(props);

        this.state = {
            isHovering: false,
        };

        // Binding method

        this.onMouseHover = this.onMouseHover.bind(this);

    }
    onMouseHover(isTrue)
    {
        if (this.state.isHovering !== isTrue) {
            this.setState({

            isHovering: !this.state.isHovering,
        });
        }


    }
    render() {
        return (
            <div className="min-vh-100" style={{ backgroundImage: `url(${content.header.bgImg})`, backgroundRepeat: 'no-repeat', backgroundSize:'cover' }}>
                <Container style={{backgroundColor: 'rgb(29,29,30,0.7)',}} >
                    <div className="row d-flex justify-content-between justify-between flex-row-reverse min-vh-100">
                    <div className="col col-md-5  mt-5">
                        <div className=" pt-1 shadow-lg" style={{
                            background: content.color_purple.LightShade, transform: 'rotate(-10deg)',
                            background: 'radial-gradient(circle, ' + content.color_purple.LightShade +' 50%, rgba(224, 212, 188, 1) 100%)',
                        }} >
                            <LazyLoadImage  src={content.header.pinImg} height={content.header.pinImg.height} placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                            <br/>
                            <LazyLoadImage src={content.header.profilImg} height={content.header.profilImg.height} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                            <div className="py-5">
                                    <h1 className=" p-2 text-dark-50 font-Limited " style={{fontFamily:'Limited',}}>{content.header.text[2]}
                                {' '}
                                <Typical
                                    steps={content.header.typical}
                                    loop={Infinity}
                                    className="inline-block"
                                />
                            </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col col-md-6 p-2 mt-5 text-white font-weight-bold ">
                        <motion.div className="my-5 py-5" initial={{opacity: 0, y:60,}}animate={{ y: 0, opacity: 1, }} transition={{duration:1}}>
                            <h2 >{content.header.text[0]} <br /> {content.header.text[1]} {(this.state.isHovering ? 'true' : 'false')}
                            </h2>
                            <h1 className=" p-2 text-white-50">{content.header.text[2]}
                                {' '}
                                <Typical
                                    steps={content.header.typical}
                                    loop={Infinity}
                                    className="inline-block"
                                />
                            </h1>
                            <div className="col col-md-6 d-flex d-inline-flex p-2 justify-content-center">
                                <motion.div animate={{ y: (this.state.isHovering ? 10 : 20), x: (this.state.isHovering ? 0 : 0), scale: (this.state.isHovering ? 1.2 : 1) }} transition={{ repeat: (this.state.isHovering ? 0 : Infinity), duration: (this.state.isHovering ? 0 : 2), repeatType: "reverse", }} onHoverStart={e => { this.onMouseHover() }} onHoverEnd={e => { this.onMouseHover() }} className="d-flex d-inline-flex p-2 justify-content-center">
                                    <ScrollLink to="stack" smooth={true}>
                                        <Button className="btn btn-secondary text-uppercase btn-lg text-white " type="button">{content.header.btnText}</Button>
                                    </ScrollLink>
                                </motion.div>
                            </div>
                        </motion.div>



                    </div>
                <div className="embed-responsive embed-responsive-16by9 mt-5">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/vlDzYIIOYmM" allowfullscreen frameBorder='0' allow='autoplay' style={{width:920, height:500}}></iframe>

                </div>

                </div>

            </Container>
                </div>

        );
    }
}
export default Header;
*/
/*               <div className="col col-md-8 ml-auto p-2 flex-row-reverse"><LazyLoadImage className="col" src={content.header.img} effect="blur" placeholderSrc={process.env.PUBLIC_URL + '/logo512'} /></div>
 *               <motion.Button animate={{ y: 10 }} transition={{ repeat: Infinity, duration: 2, repeatType: "mirror", }} whileHover={{ scale: 1.1, y:30, x:50}} className="btn btn-secondary d-flex d-inline-flex p-2 justify-content-center text-uppercase btn-lg text-white " type="button">{content.header.btnText}</motion.Button>
 *               
 *             <div className="d-flex justify-content-center" style={{ background: '#d8250f', }}>
 * <div><LazyLoadImage src={content.header.img } effects="blur"/></div>*/