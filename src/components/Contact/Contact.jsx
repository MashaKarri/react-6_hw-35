import { useDispatch } from "react-redux";

import { deleteContact } from "../../redux/operations";

import { Item, Button } from "./Contact.styled";

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <Item>
      <span>
        {contact.name}: {contact.phone}
      </span>

      <Button type="button" onClick={handleDelete}>
        Delete
      </Button>
    </Item>
  );
};
