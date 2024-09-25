import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ossImage from "../../Assets/Images/oss_dashboard.png";
import bullcomImage from "../../Assets/Images/bullcom_adminsite.png";
import bfxImage from "../../Assets/Images/bfx_adminsite.png";
import myForum from "../../Assets/Images/anime_forum.png";
import waApi from "../../Assets/Images/wa_gateway.png";

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
              title="Oss (One Stop System)"
              description="An software management system that allows users to manage their own projects and maintain their project repository. Build With Laravel 9"
            // ghLink="https://github.com/soumyajit4419/Chatify"
            // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bullcomImage}
              isBlog={false}
              title="CRM"
              description="software tool that helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. Build With Laravel 9"
            // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
            // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bfxImage}
              isBlog={false}
              title="CRM Integrated"
              description="software tool that helps businesses manage and analyze customer interactions and data throughout the customer lifecycle. Build With Laravel 9"
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
              description="A whatsapp gateway that can be used to send messages to users or used by third parties by api. Build with laravel and nodejs"
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
