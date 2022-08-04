import React from 'react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
import { motion } from 'framer-motion';

export default function Stack() {
    return (
        <div className="min-vh-100" style={{ fontFamily: 'Arial', background: content.color.LightShade }}>
            <Container>
                <div className="row py-5" id='stack'>
            
                    <h1>Stacks I use</h1>
                    </div>
                <div className="row row-col-lg-3 mx-2 my-5 py-5 d-flex justify-content-between">
                    {content.stack.languages.map((tech, index) => {
                        return (<motion.span animate={{y:(index % 2 == 0 ? 10 : -10) }} transition={{repeat:Infinity, repeatType:'reverse', duration:2}} className="col col-lg-2 flex items-center rounded-circle p-2" > <LazyLoadImage src={tech.img} width='200' alt={tech.alt} /></motion.span>);
                        })}
                </div>
                <div className="row justify-content-center">
                <div className="d-flex w-75 mt-5  pt-5" style={{ width:1080}}>
                    <p>{content.stack.desc}</p>
                   </div>
            </div>
          </Container>
        </div>
        )
}