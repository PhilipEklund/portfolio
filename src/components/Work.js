import React from 'react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
import { motion } from 'framer-motion';

export default function Work() {
    return (
        <div style={{ fontFamily: 'Arial', backgroundImage: `url(${content.assets.vintageBackgroundImg})`, backgroundRepeat: 'repeat-y', backgroundPosition: "center", }}>
            <Container>
        <div className="min-vh-100 py_5 ">

                <div className="row text-dark" id='stack'>

                    <h1 className="display-1">Work I've done</h1>
            </div>
  


                    <div className="row shadow-lg pt-2 rounded-3 text-dark position-relative" style={{ background: content.color.LightGradient_2 }}>
   
                <div className="col d-inline-flex"><LazyLoadImage src={content.work.EG.logo} alt={content.work.EG.alt} height="70" />
                </div>
                <div className="row">
                            <div className="col col-6 d-flex flex-grow-1">
                        <h2>{content.work.EG.text}</h2>
                    </div>
                            <div className="col embed-responsive embed-responsive-16by9 d-flex pb-2" >
                                <iframe className="embed-responsive-item" src={content.work.EG.videoURL} allowfullscreen frameBorder='0' allow='autoplay' style={{ width: 426, height: 240 }}></iframe>
                    </div>
                        </div>
                        <div>
                            <LazyLoadImage className="position-absolute top-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute top-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
                        <div>
                            <LazyLoadImage className="position-absolute bottom-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute bottom-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
            </div>

                    <div className="shadow-lg rounded-3  position-relative " style={{ background: content.color.LightGradient_2}}>
                <div className="row pt-5 mt-5 justify-content-center" >
                    <div className="col-4  col-lg-2">
                                <LazyLoadImage src={content.work.logotypes.astorp} alt={content.work.logotypes.astorp_alt} height="120" />
                    </div>
                            <div className="col-4 col-lg-2"><LazyLoadImage src={content.work.logotypes.yogaprovance} alt={content.work.logotypes.yoga_alt} height="120" />
                    </div>
                            <div className="col-4 col-lg-2"><LazyLoadImage src={content.work.logotypes.prinsta} alt={content.work.logotypes.prinsta_alt} height="120" />
                    </div>
                </div>
                <div className="row p-4 pb-5 mb-5"><h2>{content.work.logotypes.text}</h2>
                        </div>
                        <div>
                            <LazyLoadImage className="position-absolute top-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute top-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
                        <div>
                            <LazyLoadImage className="position-absolute bottom-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute bottom-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
            </div>

            
                    <div className="row shadow-lg rounded-3 py-5 my-5 justify-content-md-center  position-relative" style={{ background: content.color.LightGradient_2,}}>

           
                        <div className="col d-flex" style={{transform: "translate(0px,-20px)", }}><LazyLoadImage src={content.work.tankestallet.logo} alt={content.work.tankestallet.alt} height="70" /></div>
                        <div className="row">
                           
                                <div className="col embed-responsive embed-responsive-16by9 d-flex">
                                    <iframe className="embed-responsive-item" src={content.work.tankestallet.videoURL} allowfullscreen frameBorder='0' allow='autoplay' style={{ width: 640, height: 360 }}></iframe>

                            </div>
                            <div className="col mx-5 px-5">
                                <h2 className="p-4">{content.work.tankestallet.text}</h2>
                   
                            </div>
                            <div>
                                <LazyLoadImage className="position-absolute top-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                                <LazyLoadImage className="position-absolute top-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                            </div>
                            <div>
                                <LazyLoadImage className="position-absolute bottom-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                                <LazyLoadImage className="position-absolute bottom-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                            </div>
                        </div>
                    </div>

                    <div className="shadow-lg rounded-3  position-relative " style={{ background: content.color.LightGradient_2 }}>
                        <div className="row pt-5 mt-5 justify-content-center" >
                            <div className="col px-2 mx-5"><h2>{content.work.manukaHoney.text}</h2>
                            </div>
                            <div className="col  col-auto mx-3 mb-5">
                                <LazyLoadImage src={content.work.manukaHoney.image} alt="Honey Label" />
                            </div>
   
                        </div>
                        <div>
                            <LazyLoadImage className="position-absolute top-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute top-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
                        <div>
                            <LazyLoadImage className="position-absolute bottom-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute bottom-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
                    </div>


                    <div className="row shadow-lg p-5 mt-5 rounded-3 position-relative" style={{ background: content.color.LightGradient_2 }}>
                        <a className="text-decoration-none text-dark" href="https://github.com/Phil-hub/PhilipEklund_Projects">
                        <div className="col"> <LazyLoadImage src={content.work.Git.logo} height="200" alt={content.work.Git.alt} /><h2>
                            {content.work.Git.text}</h2>
                        </div></a>
                        <div>
                            <LazyLoadImage className="position-absolute top-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute top-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
                        <div>
                            <LazyLoadImage className="position-absolute bottom-0 start-0" src={content.assets.schrew} alt="" height="30" width="30" /></div><div>
                            <LazyLoadImage className="position-absolute bottom-0 end-0" src={content.assets.schrew} alt="" height="30" width="30" />
                        </div>
                    </div>

                </div>
                <div className="py-2"></div>
            </Container>
            </div>
    )
}