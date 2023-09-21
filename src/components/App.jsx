import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from "./Filter";
import { fetchContacts } from "redux/operations";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from 'redux/selectors';
import { Error } from './Error/Error';

export const App = () => {   
  const dispatch = useDispatch();
  const error = useSelector(selectError);  
  const loading = useSelector(selectIsLoading);

  
   // Фетч при вході
  useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
       
  return (
    <>      
      <ContactForm />      
      <Filter />
      {loading && error ? <Error/> : <ContactList />}      
    </>
  )
};