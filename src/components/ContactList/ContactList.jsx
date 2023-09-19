import { deleteContacts } from "redux/contactSlice";
import { DeleteBtn, List, WrapItem, Text, WrappText, IconClose } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
  const dispatch = useDispatch();
  const {contacts, filter} = useSelector(state => state.contacts); 
 
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())); 

  return (
    <List>
      {visibleContacts.map(({id, name, number}) => (        
        <li key={id}>
          <WrapItem>
            <WrappText>
            <Text>{name}</Text>
            <Text> {number}</Text>
           </WrappText>
            <DeleteBtn onClick={() => dispatch(deleteContacts(id))} >
              <IconClose />
            </DeleteBtn>
          </WrapItem>
        </li>
      ))}
    </List>
  )
};

export default ContactList