import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
const Home = () => {
  return (
    <div>
      <section className="hero-section">
        <Container>
          <Row>
            <Col>
              <h1>Find and Hire Freelancers</h1>
              <p>
                Get the best talent for your project, fast. Find the right
                freelancer for your job on our platform and start your project
                today.
              </p>
              <Link to="/register">
                <Button variant="primary">Get Started</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <section className="features-section">
        <Container>
          <h2>Why Choose Us?</h2>
          <Row>
            <Col>
              <h3>Find Quality Freelancers</h3>
              <p>
                Our platform connects you with top talent from around the
                world. Find the right freelancer for your project and get your
                job done quickly and efficiently.
              </p>
            </Col>
            <Col>
              <h3>Easy Project Management</h3>
              <p>
                Our platform makes it easy to manage your project from start to
                finish. Communicate with your freelancer, set milestones, and
                track progress all in one place.
              </p>
            </Col>
            <Col>
              <h3>Secure Payments</h3>
              <p>
                Our platform offers secure payment options to ensure that both
                you and your freelancer are protected throughout the
                transaction process.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      </div>
  )
}
export default Home;