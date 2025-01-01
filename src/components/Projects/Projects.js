import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projectPeak from "../../Assets/Projects/project-peak.png";
import jobprogress from "../../Assets/Projects/jobprogress.png";
import sarthi from "../../Assets/Projects/sarthi.png";
import restaurent from "../../Assets/Projects/restaurant.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";

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
              description="The Sarthi is a comprehensive B2B platform tailored for wholesale garment businesses. It simplifies the stocking process by enabling sellers to organize and manage their products by brand. The platform also facilitates seamless customer sales, creating an efficient bridge between wholesalers and retailers. With its user-friendly interface and advanced inventory features, The Handles Sarthi empowers businesses to streamline their operations and expand their reach in the garment industry."
              ghLink="https://github.com/codestellars/saarthi-customer-seller"
              demoLink="http://saarthi-seller.s3-website.ap-south-1.amazonaws.com/#/seller/dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectPeak}
              isBlog={false}
              title="Project Peak"
              description="Project Peak is an intuitive project management tool designed to streamline workflows. Users can effortlessly create projects, update their statuses, and monitor progress through dynamic graphs. The platform offers detailed insights, including pending and completed tasks and timelines for project creation and completion. Additionally, Project Peak keeps users informed by showcasing their most recent projects, ensuring enhanced productivity and effective tracking."
              ghLink="https://github.com/Gurpreetsingh4547/projectpeak"
              demoLink="https://projectpeak-4.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurent}
              isBlog={false}
              title="Canadian Restaurant"
              description="A sleek, modern website for a Canadian-themed restaurant, featuring a welcoming homepage, an About Us section introducing Canadian dishes, and a menu with food items, prices, and easy order options. The design uses dark themes with golden accents for a premium feel and includes a reservation feature for customer convenience."
              ghLink="https://github.com/Gurpreetsingh4547/Resturant-sass-project"
              demoLink="https://resturant-sass-project.onrender.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="E-Commerce"
              description="An e-commerce site where users can view product listings, add items to the cart, remove items from the cart, and view the cart. The site is responsive and allows easy product browsing and cart management. Admins can manage products and orders."
              ghLink="https://github.com/Gurpreetsingh4547/E-commerce"
              demoLink="https://e-commerce-6jp8.onrender.com/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
