import { useDispatch } from "react-redux";
import { setContactFilter } from "redux/contactSlice";
import { InputFilter, TextFilter, TitleFilter } from "./Filter.styled";

const Filter = () => { 
  const dispatch = useDispatch();
  
  return (
    <> 
    <TitleFilter>Contacts</TitleFilter>  
      <TextFilter>Find contacts by name</TextFilter>
      <InputFilter
        type="text"        
        onChange={(evt)=>dispatch(setContactFilter(evt.target.value))} 
      />
    </>
  );
};

export default Filter