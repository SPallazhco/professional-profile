import { Col } from "react-bootstrap"

export const ProjectCard = ({tittle, description, imUrl}) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imbx">
                <div className="image-container">
                    <img src={imUrl} alt={tittle} className="centered-image" />
                </div>
                <div className="proj-txtx">
                    <h4>{tittle}</h4>  {/* Cambiado a 'title' */}
                    <span>{description}</span>
                </div>
            </div>
        </Col>

    )
}