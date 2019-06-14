import React from 'react';
import styled from 'styled-components';

const Photo = (props) => {
  return (
    <Wrapper>
      <Image src={props.photoUrl} alt={props.photoName} color={props.color}/>
      <Text>{props.photoName}</Text>
    </Wrapper>
  );

}

const Image = styled.img`
  display: table-cell; 
  vertical-align: middle; 
  text-align: center;
  width: 300px;
  border-radius: 5px;
  padding: 5px;
  border: 2px solid ${props => props.color}
`;

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  color: white;
  padding: 5px;
  :hover {
    transform: perspective(500px) translateZ(10px);
  }
`;

const Text = styled.div`
  font-size: 12pt;
  color: black;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default Photo;