// import { deleteContacts } from "redux/contactSlice";
import { DeleteBtn, List, WrapItem, Text, WrappText, IconClose } from "./ContactList.styled"
import {
  // useDispatch,
  useSelector
} from "react-redux";
// import { getContacts } from "redux/selectors";

const ContactList = () => {
  // const dispatch = useDispatch();
  // const { contacts, filter } = useSelector(state => state.contacts);  
const contacts = useSelector((state) => state.contacts.contacts.items);
  

  console.log(contacts);
  
  // const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase())); 

  return (
    <List>
      {contacts.map(({id, name, number}) => (        
        <li key={id}>
          <WrapItem>
            <WrappText>
            <Text>{name}</Text>
            <Text> {number}</Text>
           </WrappText>
            <DeleteBtn
              // onClick={() => dispatch(deleteContacts(id))}
            >
              <IconClose />
            </DeleteBtn>
          </WrapItem>
        </li>
      ))}
    </List>
  )
};

export default ContactList