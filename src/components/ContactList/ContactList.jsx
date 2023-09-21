import { DeleteBtn, List, WrapItem, Text, WrappText, IconClose } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";
import { selectVisibleContacts } from "redux/selectors";
import { deleteContact, fetchContacts } from "redux/operations";
import { useEffect } from "react";

const ContactList = () => {
  const dispatch = useDispatch();
  
  // Фетч при вході
  useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

  const contacts = useSelector(selectVisibleContacts); 
  
  return (
    <List>
      {contacts.map(({id, name, phone}) => (        
        <li key={id}>
          <WrapItem>
            <WrappText>
            <Text>{name}</Text>
            <Text> {phone}</Text>
           </WrappText>
            <DeleteBtn onClick={() => dispatch(deleteContact(id))}>
              <IconClose />
            </DeleteBtn>
          </WrapItem>
        </li>
      ))}
    </List>
  )
};

export default ContactList