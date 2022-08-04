import React, { Component }from 'react';
import { Container } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import content from '../content';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import emailjs from 'emailjs-com';
import { alert } from 'react-bootstrap-confirmation';



class Contact extends Component {

    constructor(props) {

        super(props);

        // Binding method

        this.sendEmail = this.sendEmail.bind(this);
    }

    sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_j7rm3e8', 'template_wpbucqk', e.target, 'user_LHZjvCJ2T9ncTfoSs8zg9')
            .then((result) => {
                alert('Thank you for reaching out to me!');
                console.log(result.text);
            }, (error) => {
                alert('Something went wrong, try to send a manual email to me info@fbstudios.se!');
                console.log(error.text);
            });
    }


    render(){
        return (
            <div className="min-vh-100 text-light" style={{ fontFamily: 'Arial', background: content.color_purple.DarkShade }}>
                <Container>
                    <div className="row py-5" id='contact'>

                        <h1 className="pt-5">Contact me!</h1>
                    </div>
                    <Form id="contact-form" onSubmit={e => { this.sendEmail(e) }}>
                        <Form.Group controlId="reply_to">
                            <Form.Label>Your email address</Form.Label>
                            <Form.Control name="reply_to" type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                I will never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="my-5" controlId="from_name">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="from_name" placeholder="Enter Name"  />
                        </Form.Group>

                        <Form.Group className="my-5" controlId="message">
                            <Form.Label>Text</Form.Label>
                            <Form.Control name="message" as="textarea" rows={8} placeholder="message"/>
                        </Form.Group>
                        <Button className="mb-5 btn-lg" variant="primary" type="submit" style={{ background: content.color_purple.BrandColor }}>
                            SEND
                    </Button>
                    </Form>
                    <div className="row">
                        <div className="col">
                            <p>You can also send me an email manually to philip.eklund@fbstudios.se or contact me on LinkedIn.</p> </div> <div className="col col-auto"><a href="https://www.linkedin.com/in/philip-eklund-bb1b2563"><img src={content.assets.linkedIn} alt="linkedIn" /></a></div>
                   </div>
                    
                </Container>
            </div>
        );
    }
}

export default Contact;

/*             
 *
                        <Form.Group controlId="formBasicEmail">
                            <Form.label>Name</Form.label>
                            <Form.Control type="message" placeholder="Your name" as="textarea" rows={8}/>


                        </Form.Group>
 *             
 *             
 *             
 *             <Form id="contact-form" onSubmit={e => { this.sendEmail(e) }}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Your email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                    </Form.Text>
                            <Form.label>Name</Form.label>
                            <Form.input type="text" name="from_name" />
                        </Form.Group>

                        <Form.Group className="my-5" controlId="formTextarea">
                            <Form.Label>Text</Form.Label>
                            <Form.Control name="message" as="textarea" rows={8} />
                        </Form.Group>
                        <Button className="my-5" variant="primary" type="submit" style={{ background: content.color_purple.BrandColor }}>
                            SEND
                    </Button>
                    </Form>
                    
                    */