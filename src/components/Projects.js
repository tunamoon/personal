import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import roomies from "../assets/img/roomies.png";
import spotbnb from "../assets/img/spotbnb.png";
import glasses from "../assets/img/glasses.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import game2048 from "../assets/img/2048.png";
import huffmanheaps from "../assets/img/huffmanheaps.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Roomies",
      description: "A gameified webapp for roommate chore doing! Backend was developed locally so working on deploying... every gif on the slides(click to see) was made from our web app. I focused on developing recurring tasks, login page, and the leaderboard page.",
      imgUrl: roomies,
      linkUrl: "https://docs.google.com/presentation/d/11SWZyfuJ-ePL3_VjbMdDGN7ag0-cv53S7aYKcRKC_po/edit?usp=sharing"
    },
    {
      title: "SpotBnb",
      description: "Used databses from Spotify and Airbnb, Google Maps API to create a web app that allows users to search for airbnb's near concerts.",
      imgUrl: spotbnb,
    },
    {
      title: "Aria Glasses Python Scripting",
      description: "Developed python scripts to request MPS service, extracting VRS data config files used to build eye gaze models.",
      imgUrl: glasses,
      linkUrl: "https://github.com/tunamoon/AriaPythonScripts"
    },
    {
      title: "2048",
      description: "Classic game to play on airplanes. Can you beat my highscore of 78156?",
      imgUrl: game2048,
      linkUrl: "https://github.com/tunamoon/2048"
    },
    {
      title: "Huffman Heaps",
      description: "Built huffman heaps data structure from scratch with visualization. Heaps of blood, sweat, and tears...",
      imgUrl: huffmanheaps,
      linkUrl: "https://github.com/tunamoon/HuffmanHeaps"
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Hover over each icon to checkout my previous projects! Also checkout the communities I love and the favorites I've saved throughout the years...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Communities</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Favorites Folder</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Talk to me about volleyball, CIS TA'ing, SPARK's dev experience, every now and then (a dining concept), food in general, or anything else!</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Incoming...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}