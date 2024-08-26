import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const SearchBox = () => {
  return (
    <Row>
      <Col lg={10}>
        <Form.Control type="text" placeholder="이름을 입력해주세요." />
      </Col>
      <Col lg={2}>
        <Button variant="primary" type="submit">
          찾기
        </Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
