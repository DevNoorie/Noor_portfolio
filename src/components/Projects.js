import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import navIcon3 from "../assets/img/nav-icon3.svg";
import Carshowcase from "../assets/img/carshow.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../components/back.css";

export const Projects = () => {
  const projects = [
    // {
    //   title: "Carshowroom Website",
    //   description: "Design & Development",
    //   imgUrl: Carshowcase,
    //   github: "https://github.com/DevNoorie/Carshowroom",
    // },
    {
      title: "Carshowroom Website",
      description: "Design & Development",
      imgUrl: Carshowcase,
      github: "https://github.com/DevNoorie/Carshowroom",
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    //   github: "https://github.com/DevNoorie/BusinessStartup",
    // },
  ];

  const imageStyle = {
    width: "100%",
    height: "200px", // fixed height
    objectFit: "cover",
    borderRadius: "8px",
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    In my portfolio, I showcase notable web development
                    projects including a fully functional e-commerce website
                    (HTML, CSS, JavaScript), a weather app (React.js), a task
                    manager app (React.js, Redux), a responsive portfolio
                    website (HTML, CSS, JavaScript), and a movie recommendation
                    app (React.js, API). These projects exemplify my expertise
                    in web development, demonstrating my ability to create
                    engaging and functional applications.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">GitHub</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Contact</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible
                          ? "animate__animated animate__slideInUp"
                          : ""
                      }
                    >
                      {/* Tab 1 - Project Cards */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <Col key={index} xs={12} md={4} className="mb-4">
                              <div className="project-card">
                                <img
                                  src={project.imgUrl}
                                  alt={project.title}
                                  style={imageStyle}
                                />
                                <h5 className="mt-2">{project.title}</h5>
                                <p>{project.description}</p>
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-primary mt-2"
                                >
                                  View Website
                                </a>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 2 - GitHub Links */}
                      <Tab.Pane eventKey="second">
                        <Row className="justify-content-center">
                          {projects.map((project, index) => (
                            <Col key={index} xs={12} md={4} className="mb-4">
                              <div className="project-github-card text-center">
                                <img
                                  src={project.imgUrl}
                                  alt={project.title}
                                  style={imageStyle}
                                />
                                <h5 className="mt-2">{project.title}</h5>
                                <p>{project.description}</p>
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="btn btn-primary"
                                >
                                  View On GitHub
                                </a>
                              </div>
                            </Col>
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Tab 3 - Contact / More Info */}
                      <Tab.Pane eventKey="third">
                        <div className="text-center">
                          <p>
                            For more details or inquiries, check out my GitHub:
                          </p>
                          <a
                            href="https://github.com/DevNoorie"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={navIcon3}
                              alt="GitHub"
                              style={{ width: "80px", height: "80px" }}
                            />
                          </a>
                          <p className="mt-3">
                            Or contact me via email:{" "}
                            <a href="mailto:mnoor23.mna@gmail.com">
                              mnoor23.mna@gmail.com
                            </a>
                          </p>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
