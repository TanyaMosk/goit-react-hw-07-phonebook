import { DeleteBtn, List, WrapItem, Text, WrappText, IconClose } from "./ContactList.styled"
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectVisibleContacts } from "redux/selectors";
import { deleteContact } from "redux/operations";

const ContactList = () => {
  const dispatch = useDispatch();  

  const contacts = useSelector(selectVisibleContacts);  
  const loading = useSelector(selectIsLoading);  
  // console.log(error);
  console.log(loading);
  
  return (
    <>
      {contacts.length === 0 
        ? (<h2>Sorry, you have no saved contacts.</h2>)
        : (<>
          <p>Total contacts: {contacts.length}</p>
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
      </>)}        
    </>
  )
};

export default ContactList