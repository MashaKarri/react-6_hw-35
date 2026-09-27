import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

import { fetchContacts } from "./redux/operations";

import { Container, Title } from "./App.styled";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>

      <ContactForm />

      <SearchBox />

      <ContactList />
    </Container>
  );
}

export default App;
