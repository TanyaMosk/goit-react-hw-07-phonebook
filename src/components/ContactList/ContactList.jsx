import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "redux/operations";
import { selectError, selectVisibleContacts } from "redux/selectors";
import { DeleteBtn, List, WrapItem, Text, WrappText, IconClose, TitleList, TotalText } from "./ContactList.styled"
import Error from '../Error';

const ContactList = () => {
  const dispatch = useDispatch();  

  const contacts = useSelector(selectVisibleContacts);  
  const error = useSelector(selectError);
  
  return (
    <>
      {error ? <Error/> : null}
      {(contacts.length !== 0 )
      ? (<>
          <TotalText>Total contacts: {contacts.length}</TotalText>
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
      </>)
        : (error ? null : <TitleList>Sorry, you have no saved contacts.</TitleList>)
         }        
    </>
  )
};

export default ContactList;