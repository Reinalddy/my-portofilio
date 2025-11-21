import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ossImage from "../../Assets/Images/oss_dashboard.png";
import bullcomImage from "../../Assets/Images/bullcom_adminsite.png";
import bfxImage from "../../Assets/Images/bfx_adminsite.png";
import myForum from "../../Assets/Images/anime_forum.png";
import waApi from "../../Assets/Images/wa_gateway.png";
import posImage from "../../Assets/Images/pos.png";
import callinghelper from '../../Assets/Images/callinghelper.png';
import oprtech from '../../Assets/Images/oprtech.png';

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
              imgPath={ossImage}
              isBlog={false}
              title="HRM (Human Resource Management)"
              description="Designed and developed a comprehensive Human Resource Management (HRM) system covering payroll, recruitment, attendance tracking, and performance evaluation. Integrated third-party APIs to automate workflows and enhance operational efficiency, resulting in streamlined HR processes and improved workforce management."
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bullcomImage}
              isBlog={false}
              title="Customer Relationship Management (CRM)"
              description="Developed a full-stack CRM system handling customer data and support ticketing. Built both backend and frontend, integrated Laravel-based APIs, and implemented authentication, role-based access control, and automated email notifications. Improved system performance using Redis caching, AWS S3 for file storage, and Cloudflare for reliability and security. The project enhanced customer engagement, streamlined internal workflows, and improved overall data protection."
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bfxImage}
              isBlog={false}
              title="Customer Relationship Management (CRM)"
              description="Developed a full-stack CRM system handling customer data and support ticketing. Built both backend and frontend, integrated Laravel-based APIs, and implemented authentication, role-based access control, and automated email notifications. Improved system performance using Redis caching, AWS S3 for file storage, and Cloudflare for reliability and security. The project enhanced customer engagement, streamlined internal workflows, and improved overall data protection."
            // ghLink="https://github.com/soumyajit4419/Editor.io"
            // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myForum}
              isBlog={false}
              title="Anime Forum"
              description="A forum where users can post, comment, like, and reply to posts. Build with Laravel 10"
              ghLink="https://github.com/Reinalddy/my-forum"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={waApi}
              isBlog={false}
              title="Whatsapp Gateway"
              description="Developed and designed WhatsApp Gateway APIs for integrating WhatsApp with other systems."
            // ghLink="https://github.com/Reinalddy/my-forum"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={posImage}
              isBlog={false}
              title="POS (Point of Sale)"
              description="Developed a POS system with real-time transactions, barcode scanning, stock management, receipt generation, and reporting. Integrated payment gateways and external APIs to streamline operations and improve checkout experience."
            // ghLink="https://github.com/Reinalddy/my-forum"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={callinghelper}
              isBlog={false}
              title="CallingHelper"
              description="Built a real-time chat platform with user–admin communication, including role-based access control (RBAC), user level management, and tier-based permission logic. The system supports scalable message flow and secure access to features based on defined hierarchy."
            // ghLink="https://github.com/Reinalddy/my-forum"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={oprtech}
              isBlog={false}
              title="OPRTech"
              description="Built a purchase request management system with user request submission, data tracking, and tiered approval flows (multi-level authorization). The system enables structured procurement oversight and supports efficient decision-making."
            // ghLink="https://github.com/Reinalddy/my-forum"
            // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
