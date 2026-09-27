import { useDispatch, useSelector } from "react-redux";

import { setFilter } from "../../redux/contactsSlice";

import { getFilter } from "../../redux/selectors";

import { Box, Label, Input } from "./SearchBox.styled";

export const SearchBox = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box>
      <Label>Find contacts by name</Label>

      <Input type="text" value={filter} onChange={handleChange} />
    </Box>
  );
};
