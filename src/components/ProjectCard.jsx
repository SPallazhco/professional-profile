import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imUrl, link, ctaLabel }) => {
  const cardContent = (
    <div className="proj-imbx">
      <div className="image-container">
        <img src={imUrl} alt={title} className="centered-image" />
      </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
        {ctaLabel && <small className="d-block mt-2">{ctaLabel}</small>}
      </div>
    </div>
  );

  return (
    <Col sm={6} md={4}>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card-link"
          style={{ textDecoration: "none", color: "inherit", display: "block" }}
        >
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </Col>
  );
};
