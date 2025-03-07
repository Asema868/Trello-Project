import styled from "styled-components";

const Card = ({ card }) => {
  return <StyledDiv>{card.text}</StyledDiv>;
};

export default Card;

const StyledDiv = styled.div`
  font-size: 18px; 
  color: #444; 
  margin-bottom: 5px; 
  background-color: #f9f9f9; 
  padding: 10px; 
  border-radius: 10px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  text-align: center; 
  transition: transform 0.3s, background-color 0.3s; 

  &:hover {
    background-color: #e8e8e8; 
    transform: translateY(-2px); 
  }


  &::after {
    display: block;
    width: 90%; 
    height: 3px; 
    margin: 10px 0; 
    position: absolute; 
    bottom: 10px; 
    left: 0; 
    border-radius: 2px;
  }
`;
