import { Formik } from 'formik';
import { nanoid } from 'nanoid'
import * as Yup from 'yup';
import { Button, StyledField, StyledForm, StyledLabel, StyledError , TitleContactForm} from './ContacForm.styled';
import { useDispatch } from "react-redux";
import { addContacts } from 'redux/contactSlice';

const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .trim()
     .required('Required'),
   number: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .required('Required'),
 });

const ContactForm = () => {

  const dispatch = useDispatch();
  
  return (
    <>
    <TitleContactForm>Phonebook</TitleContactForm>
      <Formik
        initialValues={{
          name: '',
          number: '',
            }}
            validationSchema={SignupSchema}
        onSubmit={(values, actions) => {              
              dispatch(addContacts({...values, id: nanoid()}));
              actions.resetForm();          
            }}
      >
        
      <StyledForm>
        <StyledLabel>Name
        <StyledField type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required />
       <StyledError name="name" component="div"/>
        </StyledLabel>

        <StyledLabel>Number
        <StyledField
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required/>
        <StyledError name="number" component="div"/>
        </StyledLabel>
                  
        <Button type="submit">Add contact</Button>
      </StyledForm>
      </Formik>
    </>
    )
}

export default ContactForm


