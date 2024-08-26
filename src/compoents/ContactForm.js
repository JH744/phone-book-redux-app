import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const dispatch = useDispatch();

  const addContact = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_CONTACT",
      payload: { name, phoneNumber },
    });
  };
  return (
    <div>
      <Form onSubmit={addContact}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>이름 </Form.Label>
          <Form.Control
            type="text"
            placeholder="이름을 입력해주세요."
            onChange={(e) => {
              console.log(e.target.value);
              setName(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="phoneNumber"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        >
          <Form.Label>전화번호</Form.Label>
          <Form.Control type="number" placeholder="전화번호를 입력해주세요." />
        </Form.Group>
        <Button variant="warning" type="submit">
          연락처 추가
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
