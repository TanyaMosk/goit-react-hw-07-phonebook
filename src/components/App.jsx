import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from "redux/operations";
import Loader from './Loader';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from "./Filter";

export const App = () => {   
  const dispatch = useDispatch();
  const error = useSelector(selectError);  
  const loading = useSelector(selectIsLoading);
    
  useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
       
  return (
    <>      
      <ContactForm />      
      <Filter />
      {loading && !error ? <Loader/> : <ContactList />}       
    </>
  )
};