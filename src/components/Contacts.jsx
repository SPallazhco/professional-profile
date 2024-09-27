import { useState, useRef } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import imgConstact from "../assets/img/contact-img.svg";
import emailjs from '@emailjs/browser';

const Contacts = () => {
    const formalInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        message: '',
    }

    const [formDetails, setFormDetails] = useState(formalInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState({});
    
    // Crear una referencia al formulario
    const formRef = useRef(null);

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setButtonText('Sending...');

        console.log('formRef.current', formRef.current)
        // Usar la referencia al formulario en emailjs.sendForm
        emailjs.sendForm('service_5qo0k0l', 'template_14wnr0n', formRef.current, 'PO6xr3yWr-8xaedfW')
            .then((result) => {
                setButtonText('Send');
                setStatus({
                    type: 'success',
                    message: 'Message sent successfully'
                });
                setFormDetails(formalInitialDetails); // Limpiar el formulario
            }, (error) => {
                console.log('ERROR: ', error);
                setButtonText('Send');
                setStatus({
                    type: 'danger',
                    message: 'Failed to send message'
                });
            });
    }

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={imgConstact} alt="Contact Us" />
                    </Col>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        {/* Añade la referencia al formulario */}
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className='px-1'>
                                    <input 
                                        type="text" 
                                        name='firstName'
                                        value={formDetails.firstName} 
                                        placeholder='First Name' 
                                        onChange={e => onFormUpdate('firstName', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                        type="text" 
                                        name='lastName'
                                        value={formDetails.lastName} 
                                        placeholder='Last Name' 
                                        onChange={e => onFormUpdate('lastName', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                        type="email"
                                        name='email'
                                        value={formDetails.email} 
                                        placeholder='Email Address' 
                                        onChange={e => onFormUpdate('email', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={6} className='px-1'>
                                    <input 
                                        type="tel"
                                        name='phone'
                                        value={formDetails.phone} 
                                        placeholder='Phone' 
                                        onChange={e => onFormUpdate('phone', e.target.value)} 
                                    />
                                </Col>
                                <Col sm={12} className='px-1'>
                                    <textarea 
                                        name='message'
                                        value={formDetails.message} 
                                        placeholder='Message' 
                                        onChange={e => onFormUpdate('message', e.target.value)} 
                                    />
                                    <button type='submit'>
                                        <span>{buttonText}</span>
                                    </button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                        <p className={status.type === 'danger' ? 'text-danger' : 'text-success'}>
                                            {status.message}
                                        </p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Contacts;
