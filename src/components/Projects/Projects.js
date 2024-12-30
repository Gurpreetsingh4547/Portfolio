import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectPeak from "../../Assets/Projects/project-peak.png";
import jobprogress from "../../Assets/Projects/jobprogress.png";
import sarthi from "../../Assets/Projects/sarthi.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobprogress}
              isBlog={false}
              title="Leap (Formerly JobProgress)"
              description="Leap makes it easier for home improvement businesses to win and manage jobs. Whether you’re a neighborhood contractor or a national franchise, you get a complete toolset to handle everything from sales to production management to customer service – all in a single platform."
              demoLink="https://www.jobprogress.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sarthi}
              isBlog={false}
              title="Saarthi Seller"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/codestellars/saarthi-customer-seller"
              demoLink="http://saarthi-seller.s3-website.ap-south-1.amazonaws.com/#/seller/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPeak}
              isBlog={false}
              title="Project Peak"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/Gurpreetsingh4547/projectpeak"
              demoLink="https://projectpeak-4.onrender.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
