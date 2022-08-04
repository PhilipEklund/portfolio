import React from 'react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
import { motion } from 'framer-motion';
import '../index.css'

export default function LibrariesInfo() {
    return (
        <div style={{ fontFamily: 'Arial', backgroundImage: `url(${content.assets.coffeeshopbg})`, backgroundRepeat: 'repeat', backgroundPosition: "center", backgroundAttachment: "fixed" , }} id='WebDev'>
            <Container>
                <div className="row row-col-lg-3 mx-2 my-5 py-5 fs-3 text-white border border-dark border-5" style={{ backgroundImage: `url(${content.assets.cork})`, backgroundRepeat: 'repeat' ,}} >


                    
                    <div className="col "  >
                            <LazyLoadImage src={content.stack.icon.BOOTSTRAP.img} alt={content.stack.icon.BOOTSTRAP.alt} style={{ height: 150 }} />
                    </div>

                    <h1 className="display-1 text-light mt-5 col">Webdevelopment</h1>
                      <div className="col " >
                            <LazyLoadImage src={content.stack.icon.REACT.img} alt={content.stack.icon.REACT.alt} style={{ height: 150 }} />
                        </div>
                    <div className="row justify-content-center">
                    <div className="shadow-lg rounded my-5 text-dark" style={{maxWidth:800, background: content.color.PostItGradient }}>

 
                        <div className="col p-5 "><p>{content.text.bootstrap_desc}</p>
                        </div>
                    </div>
                        </div>
                    <div className="row">
                    <div className="col" id='GameDev'>
                        <LazyLoadImage src={content.stack.icon.UNITY.img} alt={content.stack.icon.UNITY.alt} style={{ width: 150 }} />
                    </div>
                        <h1 className="display-1 text-light  col">Game Development</h1>

                    <div className="col ">
                        <LazyLoadImage src={content.stack.icon.SMFL.img} alt={content.stack.icon.SMFL.alt} style={{ width: 150, height:150 }} />
                    </div>
                       </div>
    
                    <div className=" row justify-content-center">

                    <div className="col shadow-lg rounded my-5 text-dark" style={{ maxWidth: 1200, background: content.color.PostItGradient }}  >
                        <div className="row">
    
                            <div className="col pt-5"><p>{content.text.unity_desc }</p><br/><p> {content.text.sfml_desc }</p>
                
                            </div>
                                <div className="col-auto m-2 p-2 shadow-lg " style={{ background: content.color.LightGradient, transform: 'rotate(5deg)', width: 380, height: 500, fontFamily:'Limited',}}>
                                <LazyLoadImage src={content.header.pinImg} height='50' placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                                <br />
                                <LazyLoadImage src={content.assets.spaceInvaders} width={350} placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                                <div className="py-5 text-dark ">Asteroids mini game, C++</div>
                                </div>
                        </div>
                    </div>
                        </div>
                    <div className="col" id="AppDev">
                                <LazyLoadImage src={content.stack.icon.ANDROID.img} alt={content.stack.icon.ANDROID.alt} style={{ height: 150 }} />
                            </div>
                    <h1 className="display-1 text-light col">App Development</h1>

                    <div className="col">
                        <LazyLoadImage src={content.stack.icon.ANDROID_ROBOT.img} alt={content.stack.icon.ANDROID_ROBOT.alt} style={{ height: 150 }} />
                    </div>

                    <div className="row justify-content-center">
                        <div className="row shadow-lg rounded my-5" style={{ maxWidth: 1000, background: content.color.PostItGradient }}  id='androidStudio'>
                    
                        <div className="col-auto m-2 p-2 shadow-lg " style={{ background: content.color.LightGradient, transform: 'rotate(-5deg)', width: 350, height: 520, fontFamily:'Limited',}}>
                            <LazyLoadImage src={content.header.pinImg} height='50' placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                            <br />
                                <LazyLoadImage src={content.assets.antonsSkafferi} width={ 320} placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                            <div className="py-5 text-dark">Restaurant application for taking and serving orders, native JAVA.</div>
                        </div>
                        <div className="col d-flex d-inline-flex align-items-start py-5 justify-content-start mh-25" >

                            <p className="text-dark">{content.text.android_desc}</p>
                        </div>
                    </div>
                    </div>

                    <div className="row justify-content-center">

                        <div className="shadow-lg rounded" style={{ maxWidth: 1100, background: content.color.PostItGradient }} >
                        <div className="row rounded my-5" id='androidStudio'>
                            <a className="text-decoration-none" href="https://github.com/Phil-hub/PhilipEklund_Projects">
                                <div className="col">
                                
                                    <LazyLoadImage src={content.work.Git.logo} height='150' placeholderSrc={process.env.PUBLIC_URL + '/logo512'} />
                                </div>
                                <h1 className="display-1 text-dark mt-5 ">Welcome to check out my Git</h1>
                            </a>
                        </div>
                    </div>
                    </div>
                    </div>
             

                <div className="row justify-content-center">
                    <div className="d-flex w-75 mt-5  pt-5" style={{ width: 1080 }}>
                    </div>
                </div>
            </Container>
        </div>
    )
}

/*
                   <div className="col col-sm-12 col-lg-9 col-xl-6 pt-5"><p>{content.text.sfml_title} {content.text.sfml_desc }</p>

                            </div>
                            <div className="col col-sm-12 col-md-12 col-lg-1 col-xl-1 m-2 p-2 shadow-lg  " style={{ background: content.color.LightGradient, transform: 'rotate(5deg)', width:520, }}>
 
 
 */