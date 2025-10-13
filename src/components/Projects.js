import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { CarShowcase } from "./CarShowcase"; // make sure this path is correct
import "../components/back.css";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    In my portfolio, I showcase notable web development projects
                    including a fully functional e-commerce website (HTML, CSS,
                    JavaScript), a weather app (React.js), a task manager app
                    (React.js, Redux), a responsive portfolio website (HTML,
                    CSS, JavaScript), and a movie recommendation app (React.js,
                    API). These projects exemplify my expertise in web
                    development, demonstrating my ability to create engaging and
                    functional applications.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      {/* Replace projects images with CarShowcase */}
                      <Tab.Pane eventKey="first">
                        <CarShowcase />
                      </Tab.Pane>

                      {/* Tab 2 content */}
                      <Tab.Pane eventKey="second">
                        <p>
                          In my portfolio, I showcase notable web development
                          projects, including a fully functional e-commerce
                          website (HTML, CSS, JS) with product listings,
                          shopping cart, and secure payments. I also created a
                          React.js weather app with real-time updates and
                          location-based search. Additionally, I built a task
                          manager (React.js, Redux) with prioritization, due
                          dates, and task status. I designed a responsive
                          portfolio website (HTML, CSS, JS) with smooth
                          scrolling and interactive animations. Lastly, I
                          developed a movie recommendation app (React.js, API)
                          with search, detailed info, and personalized
                          suggestions. These projects demonstrate my web
                          development skills and ability to create engaging
                          applications.
                        </p>
                      </Tab.Pane>

                      {/* Tab 3 content */}
                      <Tab.Pane eventKey="third">
                        <p>
                          For more details, please check out my GitHub{" "}
                          <a
                            href="https://github.com/MuhammadNoor"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={navIcon3}
                              style={{ width: "80px", height: "80px" }}
                              alt="GitHub"
                            />
                          </a>
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
    </section>
  );
};
