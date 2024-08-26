import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./compoents/ContactForm";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactList from "./compoents/ContactList";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 className="title">연락처</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            {/* 좌측ui */}
            <ContactForm />
          </Col>
          <Col>
            {/* 우측ui */}
            <ContactList />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
