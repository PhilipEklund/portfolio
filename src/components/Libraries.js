import React from 'react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Button from 'react-bootstrap/Button';



export default function Libraries() {
    return (
        <div className="min-vh-100" style={{ fontFamily: 'Arial',}} >
            <Container >
                <div className="row py-5" id='Libraries'>
            
                    <h1 className="display-1">Libraries and Tools</h1>
                    </div>
                <div className="row row-col-lg-3 mx-2 my-5 py-5 d-flex justify-content-between">
                    {content.stack.libraries.map((tech, index) => {
                        return (<ScrollLink
                            className="col col-xl-2 d-flex justify-content-between"
                            to={tech.link}
                            smooth={true}>

                            <motion.span type="button" animate={{ y: (index % 2 == 0 ? 10 : -10) }}
                                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 2, delay: index / 3 }}
                                className="col flex items-center rounded-circle p-2" >

                                <LazyLoadImage src={tech.img} height='200' alt={tech.alt} />
                            </motion.span>
                        </ScrollLink>);
                        })}
                </div>
                <div className="row justify-content-center">
                <div className="d-flex w-75 mt-5  pt-5" style={{ width:1080}}>
                    <h4>{content.stack.libDesc}</h4>
                   </div>
            </div>
          </Container>
        </div>
        )
}