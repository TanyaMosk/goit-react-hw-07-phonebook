import styled from 'styled-components';
import { GrClose } from "react-icons/gr";

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
padding-left: 20px;
list-style: square;
color: gainsboro;
`;

export const WrapItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
gap:20px;
`;

export const Text = styled.p`
margin: 0;
padding: 5px;
text-transform: capitalize;
color: gainsboro;
`;

export const DeleteBtn = styled.button`
padding: 4px  8px;
display: flex; 
border: none;
border-radius: 4px;
background-color: transparent;
cursor: pointer;
padding: 2px;

 &:hover{
  background-color: gainsboro;   
}
`; 

export const WrappText = styled.div`
display: contents;

:last-child{
  margin-left: auto;
}
`;

export const IconClose = styled(GrClose)`
 path{
  stroke: red; 
 }  
`;

export const TotalText = styled.p`
color: lightsteelblue;
`;

export const TitleList = styled.h2`
color: gainsboro;
text-align: center;
`; 