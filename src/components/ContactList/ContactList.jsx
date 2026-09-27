import { useSelector } from "react-redux";

import { Contact } from "../Contact/Contact";

import {
  getContacts,
  getFilter,
  getIsLoading,
  getError,
} from "../../redux/selectors";

import { Title, List } from "./ContactList.styled";

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <>
      <Title>Contacts</Title>

      {isLoading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      <List>
        {filteredContacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </List>
    </>
  );
};
