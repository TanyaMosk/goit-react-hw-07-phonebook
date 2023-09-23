import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addContact } from 'redux/operations';
import { Button, StyledField, StyledForm, StyledLabel, StyledError , TitleContactForm} from './ContacForm.styled';

const SignupSchema = Yup.object().shape({
   name: Yup.string()
     .min(2, 'Too Short!')
     .max(20, 'Too Long!')
     .trim()
     .required('Required'),
   phone: Yup.string()
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
          phone: '',
            }}
            validationSchema={SignupSchema}
        onSubmit={(values, actions) => {            
            dispatch(addContact({...values}));
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

        <StyledLabel>Phone
        <StyledField
        type="tel"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required/>
        <StyledError name="phone" component="div"/>
        </StyledLabel>
                  
        <Button type="submit">Add contact</Button>
      </StyledForm>
      </Formik>
    </>
    )
}

export default ContactForm


