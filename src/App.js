import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Nav, Navbar, Carousel } from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://media.gettyimages.com/photos/girls-carrying-shopping-bags-picture-id1073935306?s=612x612"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://3.bp.blogspot.com/-8PbPNY6M4Bc/WUgIbiZhCVI/AAAAAAAAAKU/ntEeOSjm4UMwjxuQ9VZgNzmnxc3aFal1gCLcBGAs/w1200-h630-p-k-no-nu/How-to-save-money-while-shopping-online-4-2-iloveimg-compressed.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default App;
