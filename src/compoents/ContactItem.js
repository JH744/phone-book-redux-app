import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const ContactItem = ({ item }) => {
  return (
    <Row>
      <Col lg={1}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/694px-Unknown_person.jpg"
          width={50}
        ></img>
      </Col>
      <Col lg={11}>
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
    </Row>
  );
};

export default ContactItem;
