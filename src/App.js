import './App.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/esm/Button';
import Card from 'react-bootstrap/Card';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <div>
      <header>
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="#home">BB Pop SIte</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.instagram.com/ivestarship/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">IVE</NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/newjeans_official/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                NewJeans
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/nmixx_official/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                NMIXX
                </NavDropdown.Item>

                <NavDropdown.Item href="https://www.instagram.com/le_sserafim/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                Le-Sserafim
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/aespa_official/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                Aespa
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/stayc_highup/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                StayC
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/official_g_i_dle/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                G-Idle
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.instagram.com/official.kep1er/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                Kep1er
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown title="Other Links" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://nmixx.jype.com/Default/Gallery" target="_blank">
                NMIXX Gallery
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/@STUDIOCHOOM" target="_blank">
                STUDIO CHOOM 
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/@KBSKpop/videos" target="_blank">
                KBS K-Pop
              </NavDropdown.Item>
              <NavDropdown.Item href="https://www.youtube.com/@SBSKPOP" target="_blank">
                Inkigayo
              </NavDropdown.Item>

              </NavDropdown>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </nav>
      </header>
      <main>
      <Container className="custom-main-content">
      <Row class = "px-4 my-5">

        <Col sm={7}>
        <Image src="https://i.pinimg.com/originals/47/bb/27/47bb27c1e596d7b0b7cec64a9189c23f.jpg" fluid rounded className=""/>
        </Col>
        <Col sm={4}>
          <h1 class="font-weight-light">IVE New Album</h1>
          <p>
            Checkout the incredible new comeback song "Baddie" from IVE.
            With new type of pop music these girls could rank up to rank 8 in KBS Music Bank Billboard.
            This girly song had succesasfully attracted a ton of audiences from various ages. 
            Let's see the mesmerizing performance from Wonyoung, Yujin, Gaeul, Rei, Liz, and Leeseo.
          </p>
          <Button variant="outline-secondary"as="a" href="https://www.youtube.com/watch?v=ocBhK7w0dRY" target="_blank">Check It Out</Button>
        </Col>
      </Row>
     <Row>
     <Card className="text-center bg-secondary text-white my-5 py-2">
      <Card.Body className="custom-card-body">Check out for more info below.</Card.Body>
    </Card>
     </Row>
     <Row>
      <Col>
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/fe/f9/a7/fef9a760db2e9dcab3f9dfe0b3b3e66c.jpg" 
          className="card-image"/>
          <Card.Body>
            <Card.Title>Let's Go to a Party</Card.Title>
            <Card.Text>
            Let's give your party more hype with joyful song from NMIXX
            </Card.Text>
            <Button variant="outline-secondary" as="a" href="https://www.youtube.com/watch?v=Rd2wppggYxo" target="_blank">Watch Now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://www.pinkvilla.com/images/2023-07/315371840_newjeans.jpg" className="card-image" />
          <Card.Body>
            <Card.Title>NewJeans</Card.Title>
            <Card.Text>
              Check out the latest comeback girly and cheeky song from Newjeans
            </Card.Text>
            <Button variant="outline-secondary" as="a" href="https://youtu.be/ArmDp-zijuc?si=0Lmv5gJaIQsnSMN1" target="_blank">Watch Now</Button>
          </Card.Body>
        </Card>
      </Col>
      <Col>
          <Card style={{ width: '25rem' }}>
          <Card.Img variant="top" src="https://i.pinimg.com/originals/0e/a8/c7/0ea8c758a1048c97629ac417c32f7437.jpg" className="card-image"/>
          <Card.Body>
            <Card.Title>Le Sserafim</Card.Title>
            <Card.Text>
              Your night is perfect? Awesome! But how if you make it more perfect?
            </Card.Text>
            <Button variant="outline-secondary" as="a" href="https://www.youtube.com/watch?v=hLvWy2b857I" target="_blank">Watch Now</Button>
          </Card.Body>
        </Card>
      </Col>
     </Row>
    
    </Container>
      </main>
      <footer class = "py-5 my-5 bg-dark">
        <Container className="px-4">
          <p class = "text-center text-white">
            Copyright &copy; Nicholas Baron Bramantyo 
          </p>
        </Container>
      </footer>
    </div>
  );
}

export default App;
