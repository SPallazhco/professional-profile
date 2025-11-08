import { Col, Container, Row } from 'react-bootstrap';
import imgConstact from "../assets/img/contact-img.svg";

const CONTACT_EMAIL = "sergiopall@hotmail.com";
const MAIL_SUBJECT = encodeURIComponent("Contacto desde mi portafolio");
const MAIL_BODY = encodeURIComponent("Hola Sergio,\n\n");
const MAILTO_LINK = `mailto:${CONTACT_EMAIL}?subject=${MAIL_SUBJECT}&body=${MAIL_BODY}`;

const Contacts = () => {
  const openMailClient = () => {
    window.location.href = MAILTO_LINK;
  };

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row>
          <Col md={6}>
            <img src={imgConstact} alt="Contact Us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <p>Haz clic en el botón y se abrirá tu aplicación de correo con mi email y asunto listos.</p>
            <button type='button' onClick={openMailClient}>
              <span>Contáctame</span>
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contacts;
