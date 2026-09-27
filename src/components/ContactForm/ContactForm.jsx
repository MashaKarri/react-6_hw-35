import { useState } from "react";
import { useDispatch } from "react-redux";

import { addContact } from "../../redux/operations";

import { Form, Label, Input, Button } from "./ContactForm.styled";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addContact({
        name,
        phone,
      }),
    );

    setName("");
    setPhone("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name
        <Input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Label>

      <Label>
        Phone
        <Input
          type="tel"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};
